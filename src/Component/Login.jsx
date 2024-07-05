import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Login() {
  return (
    <div>
      <Nav/>
      <div className="bg-gradient-to-top h-[calc(100vh-72px)] flex justify-center items-center lg:gap-[150px] gap-[100px] lg:px-[0px] px-[50px] ">
        <div className='shadow-2xl shadow-indigo-600 lg:w-[500px] flex flex-col items-center pr-4 border-2 border-indigo-600 w-[300px] rounded-lg lg:h-[400px] '>
          <h1 className='block text-center font-medium text-indigo-900 text-4xl my-4'>Login</h1>
          <div className='flex flex-col gap-5 md:w-[300px] lg:gap-10 justify-center items-center my-3 '>
            <input className='bg-transparent lg:w-[400px] text-xl text-indigo-800 placeholder:text-indigo-400 pl-4 w-[200px] md:w-[250px] border-b-2 border-indigo-600 outline-none' type="text" placeholder='Enter your Email' />
            <input className='bg-transparent lg:w-[400px] text-xl text-indigo-800 placeholder:text-indigo-400 pl-4 w-[200px] md:w-[250px] border-b-2 border-indigo-600 outline-none' type="text" placeholder='Enter your Password' />
            <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="relative">Login</span>
            </a>
          </div>
          <p className='text-white'>Don't have an account? <Link className='text-indigo-600' to="/Registration">Register Now</Link></p>
        </div>
        <div className='hidden w-[500px] shadow-2xl md:block'><img className='rounded-lg' src="img.jpg" alt="" /></div>
      </div>
    </div>
  );
}
