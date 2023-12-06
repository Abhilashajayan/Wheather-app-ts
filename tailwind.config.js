/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html',
  './src/**/*.tsx',],
  theme: {
    extend: {
      fontFamily: {
        'creepster': ['Creepster', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}