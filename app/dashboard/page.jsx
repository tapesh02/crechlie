"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/database/client";
import styles from "./dashboard.module.scss";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      try {
        console.log("🔍 Checking user session...");

        // Get authenticated user
        const {
          data: { user: authUser },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !authUser) {
          console.log("❌ Not authenticated, redirecting to signin");
          router.push("/signin");
          return;
        }

        console.log("✅ User authenticated:", authUser);
        setUser(authUser);

        // Fetch user profile from database
        const { data: profileData, error: profileError } = await supabase
          .from("users")
          .select("*")
          .eq("id", authUser.id)
          .single();

        if (profileError && profileError.code !== "PGRST116") {
          console.error("Error fetching profile:", profileError);
          setError("Could not load user profile");
        } else {
          console.log("👤 User profile loaded:", profileData);
          setProfile(profileData);
        }
      } catch (err) {
        console.error("Error in checkUser:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [supabase, router]);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();

      if (error) {
        setError(error.message);
      } else {
        console.log("✅ Signed out successfully");
        router.push("/signin");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.loadingBox}>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.errorBox}>
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={() => router.push("/signin")} className={styles.btn}>
            Back to Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardBox}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome, {profile?.full_name || "User"}!</h1>
          <button onClick={handleSignOut} className={styles.signOutBtn}>
            Sign Out
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>Account Information</h2>
       <div className={styles.infoGrid}>
  <div className={styles.infoItem}>
    <label htmlFor="fullName">Name</label>
    <p id="fullName">{profile?.full_name}</p>
  </div>
  <div className={styles.infoItem}>
    <label htmlFor="email">Email</label>
    <p id="email">{user?.email}</p>
  </div>
  <div className={styles.infoItem}>
    <label htmlFor="userId">User ID</label>
    <p id="userId" className={styles.id}>{user?.id}</p>
  </div>
  <div className={styles.infoItem}>
    <label htmlFor="createdAt">Account Created</label>
    <p id="createdAt">{new Date(profile?.created_at).toLocaleDateString()}</p>
  </div>
</div>
          </div>

          <div className={styles.card}>
            <h2>Session Details</h2>
            <div className={styles.debugInfo}>
              <pre>{JSON.stringify({ user, profile }, null, 2)}</pre>
            </div>
          </div>
        </div>

        <p className={styles.footer}>🎉 You&apos;re successfully authenticated with Supabase!</p>
      </div>
    </div>
  );
}
