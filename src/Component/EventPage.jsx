import React from 'react'
import Nav from './Nav'

export default function EventPage() {
  return (
    <div className='bg-custom-gradient '>
      <Nav/>
      <div className='flex justify-center items-center h-[calc(100vh-72px)] py-4 '>
      <div className='h-full w-[600px] border-2 border-black rounded-lg shadow-lg shadow-indigo-500'>
        <img className='h-[250px] rounded-lg w-full' src="sports.jpg" alt="" />
         <p className='text-bold  text-2xl ml-2 my-2 '>Title:<span className='text-indigo-500'>Sport Management</span> </p>
         <p className='text-bold  text-2xl ml-2 my-2 '>Date:<span className='text-indigo-500'>25/12/2024</span> </p>
         <p className='text-bold  text-2xl ml-2 my-2 '>Venue:<span className='text-indigo-500'>collage Ground</span> </p>
         <p className='text-bold  text-2xl ml-2 my-2 '>Description: <span className='text-indigo-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, natus dignissimos ad expedita qui architecto vel eius. Nisi, nulla dolor?</span> </p>
       <div className='text-center mt-8'>

       <button className='w-40 bg-indigo-900 text-white h-10 rounded-md font-medium my-2'>Apply</button>
       </div>
      </div>

      </div>
      
    </div>
  )
}
