import InputGroup from '@/components/input'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/initSupabase';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'


function grabUser(query) {
    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const { data, error } = useSWR(`/api/getUser?${query}`, fetcher)
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading ...</div>

    // console.log('data from fetch', data)

    return (
        data
    )
  }


  async function signInWithEmail(userName, email) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: 'gebauer.phil@gmail.com',
      options: {
        emailRedirectTo: `http://uptap.app/edit/${userName}`,
      },
    })
    // console.log('data', data)
  }

export default function EditProfile({query}) {
  const supabaseClient = useSupabaseClient()
  const user = useUser();

  // useEffect(() => {
  //   // setSession(supabase.auth.session());
  //   if(user.email) signInWithEmail(); 
  // }, []);

    let userData = grabUser(query.id);
    // console.log('user', user)

    return (
      <>
      <Nav />
      <div className='flex items-center justify-center bg-white p-8'>
        <div className='mx-auto w-full max-w-xs'>
            <InputGroup userData={userData} /> 
            <div>{!user ? 'show login' : `${JSON.stringify(user)}, logged in`} </div>
            {!user ?
              <button onClick={() => signInWithEmail(query.id)}> Sign In </button> 
            : <button onClick={async () => { await supabaseClient.auth.signOut(); }}>
              click here to log out
            </button>
            }
        </div>
        </div>
        <Footer />
      </>
    )
}


EditProfile.getInitialProps = ({query}) => {
    console.log('query', query)
    return {query}
  }