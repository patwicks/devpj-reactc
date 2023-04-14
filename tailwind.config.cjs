/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#005ce6',
        // primary: "005ce6 ea6604",
        // secondary: "",
        appWhite: '#ffffff',
        appBlack: '#111111',
        appDark: '#1F2933',
        appSemiDark: '#323F4B',
        appRed: '#DC3545',
        appBlue: '#17A2B8',
        appYellow: '#FFC107',
        appGreen: '#28A745',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif', 'Helvetica'],
      },
      fontSize: {
        xs: '1rem',
        sm: '1.2rem',
        md: '1.4rem',
        lg: '1.8rem',
        xl: '2rem',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        load: 'loader 0.7s linear infinite',
      },
      keyframes: {
        loader: {
          '0%': { transform: 'scale(0.1)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.1)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-animation-delay')],
}
