/** @type {import('tailwindcss').Config} */

// Import design tokens (CommonJS-compatible — tokens use named exports)
// We re-declare the values here so tailwind.config.js stays a plain CJS file
// while the src/tokens/*.js files can be ESM for component use.

const warm = {
  50:  '#fafaf9',
  100: '#f5f5f4',
  150: '#eeede9',
  200: '#e7e5e4',
  300: '#d6d3d1',
  400: '#a8a29e',
  500: '#78716c',
  600: '#57534e',
  700: '#44403c',
  800: '#292524',
  900: '#1c1917',
};

const cream = {
  50:  '#fdfcfb',
  100: '#faf8f5',
  200: '#f5f2ed',
  300: '#ede7dd',
  400: '#e0d5c7',
  500: '#d4c4b0',
};

const accent = {
  gold:        '#d4a574',
  'gold-dark': '#b8935f',
  green:       '#2d5f3f',
  'green-dark':'#1f4229',
};

const driven = {
  dark:      '#1c1917',
  text:      '#292524',
  muted:     '#78716c',
  border:    '#e7e5e4',
  card:      '#ffffff',
  highlight: '#faf8f5',
  button:    '#292524',
  green:     '#2d5f3f',
};

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        warm,
        cream,
        accent,
        driven,
      },
      fontFamily: {
        sans: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        card:        '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover':'0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.1)',
        soft:        '0 2px 8px rgba(0,0,0,0.05)',
        hero:        '0 20px 60px rgba(0,0,0,0.3)',
        modal:       '0 24px 80px rgba(0,0,0,0.2)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
