// Supabase Configuration
// Note: Replace YOUR_SUPABASE_ANON_KEY with your actual anon key from Supabase dashboard
const supabaseUrl = "https://folbibgrbbegjvjamfle.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvbGJpYmdyYmJlZ2p2amFtZmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5MjM2NTIsImV4cCI6MjA4MDQ5OTY1Mn0.agATlGXyH7d2rTPMKz6UpFdOGYwpefTRVxSLlQC1hWI";

// Create Supabase client (supabase is available globally from CDN)
const { createClient } = supabase;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

// Authentication helper functions
async function checkAuth() {
    const {
        data: { session },
        error,
    } = await supabaseClient.auth.getSession();
    if (error) {
        console.error("Error checking auth:", error);
        return null;
    }
    return session;
}

async function getCurrentUser() {
    const {
        data: { user },
        error,
    } = await supabaseClient.auth.getUser();
    if (error) {
        console.error("Error getting user:", error);
        return null;
    }
    return user;
}

async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error("Error signing out:", error);
        return false;
    }
    return true;
}