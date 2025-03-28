import React from 'react'
import Link from 'next/link'
export default function NavBar() {
  return (
    <nav className='flex gap-5 bg-white text-black'>
        <Link href={"/"}>Home</Link>
        <Link href={"/acerca-de"}>Acerca de</Link>
    </nav>
  )
}
