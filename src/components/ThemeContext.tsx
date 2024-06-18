'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ThemeContextProps {
  theme: string;
  logo: string;
  handleThemeToggle: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const getStoredTheme = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || '';
  }
  return '';
};

const getPreferredTheme = (): string => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'adgdark'
      : 'adglight';
  }
  return 'adglight';
};

const getLogo = (theme: string): string => {
  return theme === 'adgdark'
    ? '/images/adglogowhite.png'
    : '/images/adglogo.png';
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>('');
  const [logo, setLogo] = useState<string>('');

  const handleThemeToggle = () => {
    const newTheme = theme === 'adgdark' ? 'adglight' : 'adgdark';
    const newLogo = getLogo(newTheme);
    setTheme(newTheme);
    setLogo(newLogo);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  useEffect(() => {
    const initialTheme = getPreferredTheme();
    const initialLogo = getLogo(initialTheme);
    setTheme(initialTheme);
    setLogo(initialLogo);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, logo, handleThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
