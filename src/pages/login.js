import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'



export default function Login() {
    const supabase = useSupabaseClient()

    return (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }}  theme="dark" />
    )
}