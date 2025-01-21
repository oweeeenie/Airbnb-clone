/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        logo: '#FF5A5F',
        main: '#767676',
        important: '#484848',
        selected: 'black',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn-custom': {
          color: '#767676',
          borderRadius: '0.375rem',
          padding: '0.5rem 1rem',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          '&:hover': {
            color: 'black',
            backgroundColor: 'rgba(118, 118, 118, 0.2)',
          },
          '&:active': {
            color: 'black',
            backgroundColor: 'rgba(118, 118, 118, 0.4)',
          },
        },
      });
    },
  ],
};
