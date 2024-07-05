import React from 'react'
import Nav from './Nav'
import Event from './Event'

export default function Events_Page() {
  return (
    <div className=''>
      <Nav/>
      <div className='h-[100%]  pb-10  bg-custom-gradient '>
        <h1 className='text-center py-4 text-4xl font-medium text-indigo-950'>Events</h1>
        
        <div className='h-1 w-28 rounded-lg bg-indigo-600 absolute left-[46.5%] top-[19%] '></div>
<div className='flex flex-wrap gap-10 justify-between px-10 py-10'>

  <Event/>
  <Event/>
  <Event/>
  <Event/>
  <Event/>
  <Event/>
  <Event/>
  <Event/>
  <Event/>
  <Event/>
  <Event/>
  <Event/>
</div>
        
      </div>
    </div>
  )
}
