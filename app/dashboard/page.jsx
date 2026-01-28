import { createClient } from "@/database/server";
import styles from "./dashboard.module.scss";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

export default async function Dashboard() {
  const supabase = await createClient();

  // Get authenticated user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return redirect("/signin");
  }

  // Fetch user profile from database
  const { data: profile, error: profileError } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardBox}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome, {profile?.full_name || "User"}!</h1>
          <DashboardClient user={user} />
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
                <label htmlFor="userId">Phone</label>
                <p id="userId">{user?.phone || "Not provided"}</p>
              </div>
              <div className={styles.infoItem}>
                <label htmlFor="createdAt">Account Created</label>
                <p id="createdAt">{new Date(profile?.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Session Details</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <label htmlFor="lastSignIn">Last Sign In</label>
                <p id="lastSignIn">{new Date(user.last_sign_in_at).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.footer}>🎉 You&apos;re successfully Signed In!</p>
      </div>
    </div>
  );
}
