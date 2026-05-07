/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEEDFE',
          100: '#DCDBFD',
          200: '#B8B7FB',
          300: '#9493F9',
          400: '#706FF7',
          500: '#4C4BF5',
          600: '#3C3CF4',
          700: '#2C2EF3',
          800: '#1C20F2',
          900: '#0C14F1',
        },
        secondary: {
          50: '#E1F5EE',
          100: '#C3EBDD',
          200: '#87D7BB',
          300: '#4BC39A',
          400: '#0FAF78',
          500: '#0F9B66',
          600: '#0F8754',
          700: '#0F7342',
          800: '#0F5F30',
          900: '#0F4B1E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
