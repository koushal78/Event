import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav className='flex  justify-between px-10 py-4 h-50px bg-indigo-950'>
        <h1 className='text-4xl font-bold text-indigo-500'>COll<span className='text-white'>Events</span></h1>
        <ul className='flex gap-4 text-xl text-white pr-10 font-medium'>
            <li><Link   className=' hover:text-indigo-400 duration-500'  to='/'>Home</Link></li>
            <li><Link  className=' hover:text-indigo-400 duration-500'  to='/club'>Events</Link></li>
            <li><Link  className=' hover:text-indigo-400 duration-500' >Contect us</Link></li>
            <li><Link  className=' hover:text-indigo-400 duration-500'  to='/Login'>Signup/Login</Link></li>
          
        </ul>
      </nav>
    </div>
  )
}
