/\*\*

- Example usage of Supabase client in Client Components
-
- Usage:
- 'use client';
- import { createClient } from '@/database/client';
-
- export default function MyComponent() {
- const supabase = createClient();
- // Now use supabase in your client-side code
- }
  \*/

// Example: Fetch data from a table
// const { data, error } = await supabase
// .from('creches')
// .select('\*')
// .limit(10);

// Example: Real-time subscription
// const subscription = supabase
// .channel('creches')
// .on(
// 'postgres_changes',
// { event: '\*', schema: 'public', table: 'creches' },
// (payload) => console.log('Change received!', payload)
// )
// .subscribe();

export const clientExamples = "See comments in this file for usage examples";

---

# Supabase Database Setup Guide

## Step 1: Create the Users Table

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Go to **SQL Editor** (or click the SQL button on the left sidebar)
4. Click **"New Query"**
5. Copy and paste the SQL from `src/database/schema.sql`
6. Click **"Run"** to execute

This will create:

- ✅ `users` table with proper schema
- ✅ Row Level Security (RLS) policies
- ✅ Email index for faster queries

## How It Works

### When a user signs up:

1. Supabase Auth creates an auth record with email/password
2. The signup form inserts a profile record in the `users` table
3. User data is securely stored with RLS policies

### Available Fields in Users Table:

- `id` - UUID (links to auth.users)
- `email` - User email (unique)
- `full_name` - User's full name
- `created_at` - Account creation timestamp
- `updated_at` - Last update timestamp

## Using Database Functions

Import from `src/database/queries.js`:

```javascript
import { getUserProfile, updateUserProfile } from "@/database/queries";

// Get user profile
const profile = await getUserProfile(userId);

// Update user profile
await updateUserProfile(userId, { full_name: "New Name" });
```

## Next Steps

1. ✅ Run the SQL from `schema.sql` in Supabase
2. ✅ Test signup at `/signup` - user data should be stored
3. ✅ View stored users in Supabase Dashboard → Table Editor → users
