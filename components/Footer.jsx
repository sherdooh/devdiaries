import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#33254f] text-white py-6'>
      <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row justify-around items-center'>
        {/* Logo */}
        <Image src={assets.logo_dev_light} alt='Logo' width={120} height={40} style={{ width: 'auto', height: 'auto' }}/>

        {/* Copyright */}
        <p className='text-sm text-white'>© 2023 All rights reserved</p>

        {/* Social Media Icons */}
        <div className='flex gap-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <Image src={assets.facebook_icon} alt='Facebook' width={40} height={40} />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <Image src={assets.twitter_icon} alt='Twitter' width={40} height={40} />
          </a>
          <a href='https://plus.google.com' target='_blank' rel='noopener noreferrer'>
            <Image src={assets.googleplus_icon} alt='Google Plus' width={40} height={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
