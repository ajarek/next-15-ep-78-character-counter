import Image from 'next/image'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <nav className='h-16 flex justify-between items-center px-8 bg-primary'>
      <div className='flex items-center space-x-2'>
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        <h1 className=' text-2xl font-bold'>Character Counter</h1>
      </div>
      <ModeToggle/>
    </nav>
  )
}

export default Navbar