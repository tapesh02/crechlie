"use client";

import { useState } from "react";
import { createClient } from "@/database/client";
import styles from "./signup.module.scss";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const supabase = createClient();

  const validateForm = () => {
    if (!fullName.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Step 1: Sign up user with Supabase Auth
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }

      // Step 2: Insert user data into database
      if (authData.user) {
        const { error: insertError } = await supabase.from("users").insert([
          {
            id: authData.user.id,
            email: email,
            full_name: fullName,
          },
        ]);

        if (insertError) {
          setError(`Account created but failed to save profile: ${insertError.message}`);
          setLoading(false);
          return;
        }
      }

      setMessage("✅ Sign up successful! Check your email for confirmation.");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setFullName("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h1 className={styles.title}>Join Crechlie</h1>
        <p className={styles.subtitle}>Create your account to get started</p>

        <form onSubmit={handleSignUp} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className={styles.input}
            />
          </div>

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
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            <p className={styles.hint}>Minimum 6 characters</p>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}
          {message && <div className={styles.success}>{message}</div>}

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            Already have an account?{" "}
            <a href="/signin" className={styles.link}>
              Sign in here
            </a>
          </p>
          <p className={styles.terms}>
            By signing up, you agree to our{" "}
            <a href="#" className={styles.link}>
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
