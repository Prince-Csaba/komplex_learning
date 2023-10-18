"use client"

import { signIn, signOut, useSession, getSession } from 'next-auth/react'
import React from 'react'

const SignInButton = () => {

  const { data: session, status } = useSession()

  console.log('Béla');
  console.log(session);
  console.log(status);

/*   if (status === "loading") {
    return <p>Loading...</p>
  } */

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }

  if (session && session.user) {
    console.log(session.user);
    return (
      <div className="flex gap-4 ml-a">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => {signOut()}} className="text-red-600">
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <>
    <button onClick={() => {signOut()}} className="text-red-600">Sign Out</button>
    <button onClick={() => 
    {
      console.log('clicked');
      signIn()
    }
  } className="text-green-600 ml-auto">
    Sign In
  </button>
      </>
  )
}

export default SignInButton