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
      keyframes: {
        selectedEffect: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0.85)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        selectedEffect: 'selectedEffect 0.2s ease-in-out',
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
        '.filter-button': {
          color: '#767676',
          cursor: 'pointer',
          padding: '0.5rem',
          gap: '7.5px',
          position: 'relative',
          transition: 'transform 1s ease',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '75%',
            height: '2px',
            backgroundColor: '#767676',
          },
          '&:hover': {
            color: 'black',
            '&::after': {
              backgroundColor: 'black',
            },
          },
        },
      });
    },
  ],
};
