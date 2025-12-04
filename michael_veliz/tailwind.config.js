/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,js,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: { 
        primary: '#201819',
        secondary: '#E94560',
        button: '#303D49',
        accent: '#0F3460',
        light: '#E0E1DD',
      },
      fontFamily: {
        cursive: ['Playfair Display', 'serif'],
        normal: ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
}

