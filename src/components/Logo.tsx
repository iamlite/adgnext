'use client';

import Image from 'next/image';

import useLogo from './useLogo';

const Logo = () => {
  const { logo } = useLogo();

  return (
    <Image
      alt='Logo'
      src={logo}
      width={200}
      height={50}
      className='object-contain'
    />
  );
};

export default Logo;
