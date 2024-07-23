/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    },
    extend: {
      colors: {
        'second-bg': 'var(--s-color)',
        'second-text': 'var(--f-color)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontSize: {
        'title': '48px',
      },
      fontFamily: {
        hitman: ["var(--font-hitman)"],
        comic: ["var(--font-comic)"],
        fascinate: ["var(--font-fascinate)"],
        grotesk: ["var(--font-grotesk)"],
        flower: ["var(--font-flower)"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  darkMode: 'class',
};
