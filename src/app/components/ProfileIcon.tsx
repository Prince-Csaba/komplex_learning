"use client";

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image';

const ProfileIcon = () => {
  const { data: session, status } = useSession();
  console.log(status);

  if (status === "authenticated") {
    return (
      <div>
        <Image
          src = {`${session.user?.image}`}
          width={40}
          height={40}
          alt = "User Photo"
        />
        <button onClick={() => {signOut()}}>Sign Out</button>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={() => {signIn()}}>Sign In</button>
      </div>
    )
  }
}

export default ProfileIcon