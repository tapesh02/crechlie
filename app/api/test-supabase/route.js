import { createClient } from "@/database/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = await createClient();

    // Test connection by fetching from auth.users or a public table
    const { data, error } = await supabase.auth.getUser();

    console.log("🔗 Supabase Connection Test");
    console.log("=============================");
    console.log("User Data:", data);
    console.log("Auth Error:", error);
    console.log("Connection Status:", error ? "❌ Failed" : "✅ Connected");

    if (error) {
      return NextResponse.json(
        {
          status: "❌ Connection Failed",
          error: error.message,
          details: error,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        status: "✅ Connection Successful",
        message: "Supabase is properly configured",
        user: data.user,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ Supabase Connection Error:", error);
    return NextResponse.json(
      {
        status: "❌ Connection Error",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 },
    );
  }
}
