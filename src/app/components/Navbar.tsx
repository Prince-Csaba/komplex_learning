import React from 'react'
import Link from 'next/link'
import ProfileIcon from './ProfileIcon'

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/myCourses"}>Kurzusaim</Link>
    </nav>
  )
}

export default Navbar