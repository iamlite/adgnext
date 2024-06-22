import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const getLogo = (theme: string | undefined): string => {
  return theme === 'adgdark'
    ? '/images/adglogowhite.png'
    : '/images/adglogo.png';
};

const useLogo = () => {
  const { resolvedTheme } = useTheme();
  const [logo, setLogo] = useState<string>('');

  useEffect(() => {
    setLogo(getLogo(resolvedTheme));
  }, [resolvedTheme]);

  return { logo };
};

export default useLogo;
