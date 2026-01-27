-- Create users table in Supabase
-- Run this SQL in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql/new

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own data
CREATE POLICY "Users can read own data" 
ON users FOR SELECT 
USING (auth.uid() = id);

-- Policy: Users can update their own data
CREATE POLICY "Users can update own data" 
ON users FOR UPDATE 
USING (auth.uid() = id);

-- Policy: Anyone can insert (for signup)
CREATE POLICY "Anyone can insert" 
ON users FOR INSERT 
WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS users_email_idx ON users(email);
