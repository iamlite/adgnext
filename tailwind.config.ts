import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="adgdark"]'],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [daisyui, typography],
  daisyui: {
    themes: [
      {
        adglight: {
          'color-scheme': 'light',
          primary: '#E0D2B7',
          secondary: '#B7C5E0',
          accent: '#B7E0D2',
          neutral: '#c6ad98',
          info: 'oklch(79.54% 0.103 205.9)',
          success: 'oklch(90.13% 0.153 164.14)',
          warning: 'oklch(88.37% 0.135 79.94)',
          error: 'oklch(78.66% 0.15 28.47)',
          'base-100': 'oklch(100% 0 0)',
          'base-200': '#F2F2F2',
          'base-300': '#E6E5E5',
          '--rounded-box': '1rem',
          '--rounded-btn': '1rem',
          '--tab-radius': '0.7rem',
          '--glass-blur': '3px',
        },
      },
      {
        adgdark: {
          'color-scheme': 'dark',
          primary: '#e0d2b7',
          secondary: '#B7C5E0',
          accent: '#B7E0D2',
          info: 'oklch(79.54% 0.103 205.9)',
          success: 'oklch(90.13% 0.153 164.14)',
          warning: 'oklch(88.37% 0.135 79.94)',
          error: 'oklch(78.66% 0.15 28.47)',
          neutral: '#413932',
          'neutral-content': '#f8f8f2',
          'base-100': '#393939',
          'base-200': '#202020',
          'base-300': '#191919',
          'base-content': '#f8f8f2',
          '--rounded-box': '1rem',
          '--rounded-btn': '1rem',
          '--tab-radius': '0.7rem',
          '--glass-blur': '3px',
        },
      },
    ],
    darkTheme: 'adgdark',
  },
} satisfies Config;
