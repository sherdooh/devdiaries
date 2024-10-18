import React from 'react';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  
  return (
    <div className='py-10 px-6 md:px-16 lg:px-32'>
      {/* Navbar */}
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <Link href='/'>
          <Image src={assets.logo_dev_transparent} width={130} style={{ width: 'auto', height: 'auto' }} alt='devdiaries' className='w-[130px] sm:w-auto' />
        </Link>

        {/* Get Started Button */}
        <button className='flex items-center text-white gap-2 font-semibold py-2 px-5 sm:py-3 sm:px-8
          bg-[#33254f] border border-black shadow-lg rounded-md 
          hover:bg-[#6F49C1] active:bg-[#5A36A1] transition-transform duration-200 transform hover:scale-105
          focus:ring-4 focus:ring-[#8D68E3]/50 focus:outline-none'>
          Get Started
          <Image src={assets.arrow} alt='arrow' className='w-5 h-5' />
        </button>
      </div>
    </div>
  );
};

export default Header;
