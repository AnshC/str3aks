import { supabase } from "../utils/supabaseClient";

export async function handleSignUp (uEmail, uPass) {
    const { user } = await supabase.auth.signUp({email: uEmail, password: uPass})
    return (user)
}