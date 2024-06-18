'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import { FiMenu, FiX } from 'react-icons/fi';

import { useTheme } from '../components/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, handleThemeToggle } = useTheme();
  return (
    <div className='hidden sm:flex items-center'>
      <label className='swap swap-rotate align-middle'>
        <input
          type='checkbox'
          className='theme-controller'
          onChange={handleThemeToggle}
          checked={theme === 'adgdark'}
        />
        <div className='swap-off'>
          <AiOutlineSun className='w-6 h-6' />
        </div>
        <div className='swap-on'>
          <AiOutlineMoon className='w-6 h-6' />
        </div>
      </label>
    </div>
  );
};

const Header: React.FC = () => {
  const { logo } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-base-100'>
      <nav className='navbar justify-between bg-base-100 shadow-2xl'>
        {/* Logo */}
        <div className='navbar-start'>
          <Image
            alt='Logo'
            src={logo}
            width={200}
            height={50}
            className='object-contain'
          />
        </div>

        {/* Menu for desktop */}
        <ul className='hidden sm:flex menu menu-horizontal gap-2'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <ThemeToggle />

        {/* Menu for mobile */}
        <div className='sm:hidden flex items-center'>
          <button className='btn btn-ghost' onClick={toggleMenu}>
            {isMenuOpen ? (
              <FiX className='w-6 h-6' />
            ) : (
              <FiMenu className='w-6 h-6' />
            )}
          </button>
        </div>
      </nav>

      {/* Side Menu for mobile */}
      {isMenuOpen && (
        <div className='sm:hidden fixed inset-0 bg-base-200 z-50 flex flex-col p-6'>
          <button className='self-end mb-6 btn btn-ghost' onClick={toggleMenu}>
            <FiX className='w-6 h-6' />
          </button>
          <ul className='menu menu-vertical gap-4'>
            <li>
              <Link href='/' onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href='/services' onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href='/blog' onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link href='/contact' onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
};

export default Header;
