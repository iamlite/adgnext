'use client';

import Image from 'next/image';
import React from 'react';

import { useTheme } from '../components/ThemeContext';

const Footer: React.FC = () => {
  const { logo } = useTheme();

  return (
    <footer className='text-base-content'>
      <div className='footer footer-center p-10 bg-base-300'>
        {/* Links */}
        <nav>
          <div className='flex flex-wrap justify-center gap-y-2 gap-x-6 text-lg'>
            <a href='/Contact' className='link link-hover'>
              Contact us
            </a>
            <a href='/Services' className='link link-hover'>
              Services
            </a>
            <a href='/Privacy' className='link link-hover'>
              Privacy Policy
            </a>
            <a href='/Tos' className='link link-hover'>
              Terms & Conditions
            </a>
            <a href='/Careers' className='link link-hover'>
              Careers
            </a>
          </div>
        </nav>
      </div>

      {/* Brand */}
      <aside className='bg-base-100 py-4 px-8 w-full flex gap-2 flex-wrap justify-between items-center text-sm'>
        <p className='text-xl flex items-center gap-2'>
          <Image
            alt='Logo'
            src={logo}
            width={200}
            height={50}
            className='object-contain'
          />
        </p>
        <p>Copyright © 2024 - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
