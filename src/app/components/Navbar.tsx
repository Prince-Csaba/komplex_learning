import React from 'react'
import Link from 'next/link'
import ProfileIcon from './ProfileIcon'

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/myCourses"}>Kurzusaim</Link>
      <ProfileIcon />
    </nav>
  )
}

export default Navbar