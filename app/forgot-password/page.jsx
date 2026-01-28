"use client";
import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/database/client";
import styles from "./forgotpassword.module.scss";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const supabase = createClient();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage("");
    setLoading(true);

    try {
      if (!email.trim()) {
        setError("Please enter your email address");
        setLoading(false);
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        setLoading(false);
        return;
      }
      // Send password reset email
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (resetError) {
        setError(resetError.message || "Failed to send reset email. Please try again.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setMessage(
        `✅ Reset link sent! Check your email at ${email} for instructions to reset your password.`
      );
      setEmail("");

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err.message || "An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <div className={styles.forgotPasswordBox}>
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>🔑</span>
        </div>

        <h1 className={styles.title}>Forgot Password?</h1>
        <p className={styles.subtitle}>
          No worries! Enter your email and we'll send you a link to reset your password.
        </p>

        {!submitted ? (
          <form onSubmit={handleForgotPassword} className={styles.form}>
            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

            <p className={styles.helpText}>
              Remember your password?{" "}
              <Link href="/signin" className={styles.link}>
                Sign in
              </Link>
            </p>
          </form>
        ) : (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✨</div>
            {message && <p className={styles.successMessage}>{message}</p>}
            <p className={styles.successHint}>
              Didn't receive the email? Check your spam folder or{" "}
              <button
                type="button"
                className={styles.retryBtn}
                onClick={() => setSubmitted(false)}
              >
                try again
              </button>
            </p>
          </div>
        )}

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Don't have an account?{" "}
            <Link href="/signup" className={styles.footerLink}>
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
