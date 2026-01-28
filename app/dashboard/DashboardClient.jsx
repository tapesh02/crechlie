"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/database/client";
import styles from "./dashboard.module.scss";

export default function DashboardClient({ user }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Sign out error:", error.message);
      } else {
        console.log("✅ Signed out successfully");
        router.push("/signin");
      }
    } catch (err) {
      console.error("Error signing out:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleSignOut} 
      className={styles.signOutBtn}
      disabled={loading}
    >
      {loading ? "Signing out..." : "Sign Out"}
    </button>
  );
}
