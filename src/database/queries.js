/**
 * Database utilities for Supabase operations
 * Server-side operations using the server client
 */

import { createClient } from "./server";

/**
 * Get user profile from database
 * @param {string} userId - The user ID
 * @returns {Promise<Object>} User profile data
 */
export async function getUserProfile(userId) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("users").select("*").eq("id", userId).single();

  if (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }

  return data;
}

/**
 * Update user profile in database
 * @param {string} userId - The user ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object>} Updated user data
 */
export async function updateUserProfile(userId, updates) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId)
    .select();

  if (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }

  return data;
}

/**
 * Create a new user in the database (called after auth signup)
 * @param {string} userId - The user ID from auth
 * @param {string} email - User email
 * @param {string} fullName - User full name
 * @returns {Promise<Object>} Created user data
 */
export async function createUserProfile(userId, email, fullName) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        id: userId,
        email,
        full_name: fullName,
      },
    ])
    .select();

  if (error) {
    console.error("Error creating user profile:", error);
    throw error;
  }

  return data[0];
}

/**
 * Delete user profile from database
 * @param {string} userId - The user ID
 * @returns {Promise<Object>} Response from deletion
 */
export async function deleteUserProfile(userId) {
  const supabase = await createClient();

  const { error } = await supabase.from("users").delete().eq("id", userId);

  if (error) {
    console.error("Error deleting user profile:", error);
    throw error;
  }

  return { success: true };
}

/**
 * Check if user exists in database
 * @param {string} email - User email
 * @returns {Promise<boolean>} True if user exists
 */
export async function userExists(email) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("users").select("id").eq("email", email).single();

  if (error && error.code !== "PGRST116") {
    console.error("Error checking user existence:", error);
    throw error;
  }

  return !!data;
}
