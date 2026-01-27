"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../src/database/client";

export default function SupabaseTest() {
  const [status, setStatus] = useState("Testing connection...");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log("🔗 Starting Supabase connection test...");

        const supabase = createClient();
        console.log("✅ Supabase client created");

        // Test auth connection
        const { data: authData, error: authError } = await supabase.auth.getUser();

        console.log("📊 Auth Data:", authData);
        console.log("Auth Error (if any):", authError?.message);

        // Test 2: Try to get session
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        console.log("📊 Session Data:", sessionData);

        // Connection is successful if we can communicate with Supabase
        // (even if there's no authenticated user)
        const isConnected = !authError?.message?.includes("Failed to fetch");

        if (isConnected) {
          setStatus("Connection Test Result: ✅ CONNECTED");
          setData({
            message: "✅ Supabase connection is working properly!",
            details: {
              url: process.env.NEXT_PUBLIC_SUPABASE_URL,
              authenticated_user: authData?.user ? authData.user.email : "Not logged in (expected)",
              session_active: sessionData?.session ? "Yes" : "No",
              note: "No auth session is normal - you need to sign up/login first",
            },
            timestamp: new Date().toISOString(),
          });
          console.log("✅ Connection Successful!");
        } else {
          setStatus("Connection Test Result: ❌ DISCONNECTED");
          setError("Cannot reach Supabase server");
          console.error("Connection failed:", authError);
        }
      } catch (err) {
        console.error("❌ Exception during test:", err);
        setStatus("Connection Test Result: ❌ Error");
        setError(err.message);
      }
    };

    testConnection();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "monospace", backgroundColor: "#f5f5f5" }}>
      <h1>🧪 Supabase Connection Test</h1>
      <hr />

      <div style={{ marginBottom: "20px" }}>
        <h2>{status}</h2>
      </div>

      {error && (
        <div style={{ backgroundColor: "#ffebee", padding: "10px", borderRadius: "4px", marginBottom: "20px" }}>
          <strong>❌ Error:</strong>
          <pre>{error}</pre>
        </div>
      )}

      {data && (
        <div style={{ backgroundColor: "#e8f5e9", padding: "10px", borderRadius: "4px", marginBottom: "20px" }}>
          <strong>✅ Connection Data:</strong>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      <hr />
      <p>Check your browser console (F12) for detailed logs</p>
    </div>
  );
}
