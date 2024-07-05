// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Registration from './Component/Registration';
import Events_Page from './Component/Events_Page';
import EventPage from './Component/EventPage';
const eventDetails = {
  title: 'College Tech Fest 2024',
  date: '2024-09-15',
  time: '10:00 AM - 5:00 PM',
  location: 'College Auditorium',
  description: 'Join us for a day filled with tech talks, workshops, and networking with industry professionals. Open to all students and faculty.',
};

const App = () => {
  
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path='/club' element={<Events_Page/>}/>
        <Route path='/Events' element={ <EventPage event={eventDetails} />}/>
        <Route path='/Explor' element={<EventPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
