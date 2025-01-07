/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lilac-light': '#D1A2FF',
        'dark-grey': '#242424',
      },
    },
  },
  plugins: [],
}

