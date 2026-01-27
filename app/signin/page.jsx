"use client";

import PropTypes from "prop-types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../src/database/client";
import styles from "./signin.module.scss";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage("");
    setLoading(true);

    try {
      console.log("🔐 Attempting to sign in...");

      // Step 1: Sign in with email and password
      const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        console.error("❌ Sign in error:", signInError);

        // Provide better error messages
        let errorMessage = signInError.message;
        if (signInError.message.includes("Invalid login credentials")) {
          errorMessage = "❌ Invalid email or password. Please check and try again.";
        } else if (signInError.message.includes("Email not confirmed")) {
          errorMessage = "❌ Please confirm your email first. Check your email inbox for a confirmation link.";
        } else if (signInError.message.includes("User not found")) {
          errorMessage = "❌ No account found with this email. Please sign up first.";
        }

        setError(errorMessage);
        setLoading(false);
        return;
      }

      console.log("✅ Sign in successful");

      // Step 2: Get authenticated user
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error("❌ Error getting user:", userError);
        setError("Signed in but couldn't fetch user data");
        setLoading(false);
        return;
      }

      // Step 3: Get user profile from database
      const { data: profileData, error: profileError } = await supabase
        .from("users")
        .select("*")
        .eq("id", userData.user.id)
        .single();

      if (profileError && profileError.code !== "PGRST116") {
        console.error("Warning: Could not fetch profile:", profileError);
      }

      console.log("👤 User authenticated:", {
        user: userData.user,
        profile: profileData,
      });

      setMessage("✅ Sign in successful! Redirecting...");
      setEmail("");
      setPassword("");

      // Step 4: Redirect to dashboard after 1.5 seconds
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (err) {
      console.error("❌ Exception during sign in:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className={styles.signinContainer}>
      <div className={styles.signinBox}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to your Crechlie account</p>

        <form onSubmit={handleSignIn} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
              disabled={loading}
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}
          {message && <div className={styles.success}>{message}</div>}

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className={styles.link}>
              Sign up here
            </Link>
          </p>
          <p>
            <Link href="/forgot-password" className={styles.link}>
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

Signin.propTypes = {};
Signin.defaultProps = {};

export default Signin;
