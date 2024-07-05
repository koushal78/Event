import React from 'react'
import { Link } from 'react-router-dom'

export default function Event() {
  return (
    <div>
      <div className='h-[400px] w-[300px] shadow-2xl shadow-black rounded-lg text-center'>
        <img  className='h-[200px] w-[300px]' src="" alt="" />
        <p className='text-indigo-600 text-xl font-medium text-center my-2' >Titile</p>
        <p className='text-indigo-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum animi aut, laboriosam soluta eaque. Quos natus omnis ea labore?</p>
        <button className='w-40 bg-indigo-900 text-white h-10 rounded-md font-medium my-2'>
            <Link to='/Explor'>
            Explor
            
            </Link>
           </button>
      </div>
    </div>
  )
}
