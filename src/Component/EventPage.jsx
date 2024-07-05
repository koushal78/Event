// src/EventPage.jsx
import React from 'react';
import Nav from './Nav';

const EventPage = ({ event }) => {
  return (
    <div className='bg-custom-gradient h-[100%]'>
      <Nav/>

    <div className="max-w-2xl mx-auto p-4 my-2 bg-white shadow-lg shadow-black rounded-md">
      <img className='w-[600px] h-[400px]' src="" alt="" />
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-700 mb-2"><strong>Date:</strong> {event.date}</p>
      <p className="text-gray-700 mb-2"><strong>Time:</strong> {event.time}</p>
      <p className="text-gray-700 mb-2"><strong>Location:</strong> {event.location}</p>
      <p className="text-gray-700 mb-4"><strong>Description:</strong> {event.description}</p>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        onClick={() => alert('Apply button clicked!')}
      >
        Apply
      </button>
    </div>

    </div>
  );
};

export default EventPage;
