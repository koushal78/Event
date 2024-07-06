import React from 'react'
import Nav from './Nav'
import Event from './Event'

export default function Events_Page() {
  const titles =['Kakakrit','codechef','geeksforgeeks','sports clubs ','Aagaz', 'Dataverse','Picturesque',"LDL"]
  const images = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg']
  return (
    <div className='bg-[#ECCEAE] '>
      <Nav/>
      <div className='h-[100%]  pb-10 bg-custom-gradient '>
        <h1 className='text-center py-4 text-4xl font-medium text-indigo-950'>Events</h1>
        
        <div className='h-1 w-28 rounded-lg bg-indigo-600 absolute left-[46.5%] top-[19%] '></div>
<div className='flex flex-wrap gap-10 justify-between px-10 py-10'>
{titles.map((title, index,) => (
            <Event key={index} title={title} image={images[index]} />
          ))}
</div>
        
      </div>
    </div>
  )
}
