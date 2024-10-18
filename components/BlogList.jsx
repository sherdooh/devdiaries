'use client'; // Mark this component as a Client Component

import { useEffect, useState } from 'react'; // Import useState
import { blog_data } from '@/Assets/assets';
import React from 'react';
import BlogItem from './BlogItem';
import axios from 'axios';

const BlogList = () => {
  const [menu, setMenu] = useState('All'); 
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs)

  }

  useEffect(()=> {
    fetchBlogs();
  },[])
  
  // Filter blog items based on selected menu
  const filteredBlogs = menu === 'All'
    ? blogs// Show all blogs if 'All' is selected
    : blogs.filter(blog => blog.category === menu); // Filter blogs by category

  return (
    <div className='px-6 lg:px-16 xl:px-24'
    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2020/02/01/06/11/web-4809584_960_720.jpg')" }}>
      
      {/* Blog Filter Buttons */}
      <div className='flex justify-center gap-4 my-10'>
        <button
          onClick={() => setMenu('All')}
          className={`${menu === 'All' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          All
        </button>
        
        <button
          onClick={() => setMenu('Programming')}
          className={`${menu === 'Technology' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Programming
        </button>
        
        <button
          onClick={() => setMenu('Cloud')}
          className={`${menu === 'Startup' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Cloud&Devops
        </button>
        
        <button
          onClick={() => setMenu('AI')}
          className={`${menu === 'Lifestyle' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          AI&ML
        </button>
        <button
          onClick={() => setMenu('Cybersecurity')}
          className={`${menu === 'Technology' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Cybersecurity
        </button>
        
        <button
          onClick={() => setMenu('Data')}
          className={`${menu === 'Startup' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Data Science
        </button>
        
        <button
          onClick={() => setMenu('Blockchain')}
          className={`${menu === 'Lifestyle' ? 'bg-[#33254f] text-white' : 'bg-gray-200 text-black'} py-2 px-6 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300`}
        >
          Blockchain
        </button>
      </div>

      {/* Blog Items */}
      <div className='flex flex-wrap justify-center gap-10 mb-16'>
        {filteredBlogs.map((item, index) => (
          <BlogItem
            key={index}
            id={item._id}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
