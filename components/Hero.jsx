'use client';

import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {

  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      const response = await axios.post('/api/email', formData);
      
      if (response.data.success) {
        toast.success(response.data.msg || "Email submitted successfully!");
        setEmail(""); // Clear the form input after successful submission
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Error submitting form");
    }
  }

  return (
    <div className='text-center h-[70vh] bg-cover bg-center'
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2020/02/01/06/11/web-4809584_960_720.jpg')" }}>

      <Header />

      {/* Toast Notification Container */}
      <ToastContainer />

      {/* Main Heading */}
      <h1 className='text-4xl sm:text-6xl font-extrabold text-[#33254f]'>
        Explore Our Latest Blogs
      </h1>

      {/* Paragraph */}
      <p className='mt-6 max-w-[740px] mx-auto text-base sm:text-lg text-#33254f leading-relaxed font-semibold'>
        Stay up-to-date with the latest trends, tips, and insights from industry experts. Read articles on web development, design, and much more.
      </p>

      {/* Subscribe Form */}
      <form onSubmit={onSubmitHandler} className='flex items-center justify-between max-w-[500px] mx-auto mt-10 p-2 bg-white border border-black rounded-lg shadow-md
        hover:shadow-lg transition-all duration-300'>


        <input 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          type='email' 
          placeholder='Enter your email'
          aria-label='Email Address'
          className='flex-grow py-4 px-4 text-gray-700 rounded-l-lg outline-none text-sm sm:text-base 
          border-r border-gray-300 focus:border-[#8D68E3] focus:ring-2 focus:ring-[#8D68E3]/50' />
        <button type='submit'
          className='bg-[#33254f] text-white py-3 px-6 rounded-r-lg font-semibold hover:bg-[#6F49C1] 
          focus:ring-4 focus:ring-[#6F49C1]/50 active:bg-[#5A36A1] transition-all duration-300'>
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Hero;
