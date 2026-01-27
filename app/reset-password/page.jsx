"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../src/database/client";
import styles from "./resetpassword.module.scss";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [sessionValid, setSessionValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    // Check if there's a valid reset session
    const checkSession = async () => {
      try {
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

        if (sessionError || !sessionData.session) {
          setError(
            "Invalid or expired reset link. Please request a new password reset link."
          );
          setSessionValid(false);
          return;
        }

        setSessionValid(true);
      } catch (err) {
        console.error("Error checking session:", err);
        setError("An error occurred. Please try again.");
      }
    };

    checkSession();
  }, [supabase]);

  const validateForm = () => {
    if (!password) {
      setError("Password is required");
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

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      console.log("🔄 Attempting to update password...");

      const { error: updateError } = await supabase.auth.updateUser({
        password: password,
      });

      if (updateError) {
        console.error("❌ Password update error:", updateError);
        setError(updateError.message || "Failed to update password. Please try again.");
        setLoading(false);
        return;
      }

      console.log("✅ Password updated successfully");
      setMessage("✅ Password reset successful! Redirecting to sign in...");
      setPassword("");
      setConfirmPassword("");

      // Redirect to signin after 2 seconds
      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    } catch (err) {
      console.error("❌ Exception during password reset:", err);
      setError(err.message || "An unexpected error occurred");
      setLoading(false);
    }
  };

  if (!sessionValid && error) {
    return (
      <div className={styles.resetPasswordContainer}>
        <div className={styles.resetPasswordBox}>
          <div className={styles.errorBox}>
            <div className={styles.errorIcon}>⚠️</div>
            <h1 className={styles.title}>Reset Link Invalid</h1>
            <p className={styles.subtitle}>{error}</p>
            <Link href="/forgot-password" className={styles.submitBtn}>
              Request New Link
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.resetPasswordContainer}>
      <div className={styles.resetPasswordBox}>
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>🔐</span>
        </div>

        <h1 className={styles.title}>Create New Password</h1>
        <p className={styles.subtitle}>
          Enter your new password below. Make sure it's strong and unique.
        </p>

        <form onSubmit={handleResetPassword} className={styles.form}>
          {error && <div className={styles.error}>{error}</div>}
          {message && <div className={styles.success}>{message}</div>}

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              New Password
            </label>
            <div className={styles.passwordInputWrapper}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className={styles.input}
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex="-1"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            <p className={styles.hint}>At least 6 characters</p>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password
            </label>
            <div className={styles.passwordInputWrapper}>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className={styles.input}
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                tabIndex="-1"
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Updating..." : "Reset Password"}
          </button>

          <p className={styles.helpText}>
            Remember your password?{" "}
            <Link href="/signin" className={styles.link}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
