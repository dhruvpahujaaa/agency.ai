/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#5044E5',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
      },
    },
  },
  plugins: [],
}
