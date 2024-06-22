'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeToggle = () => {
    const newTheme = resolvedTheme === 'adgdark' ? 'adglight' : 'adgdark';
    setTheme(newTheme);
  };

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

export default ThemeToggle;
