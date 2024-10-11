const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      fontFamily: {
        'dm':["DM Sans", 'sans-serif'],
        'DMSans': ["DM Sans", 'sans-serif'],
        'Edu': ["Edu AU VIC WA NT Guides", 'cursive'],
        'abc':["Titillium Web", 'sans-serif'],
        'abd':["Titillium Web", ...defaultTheme.fontFamily.sans],
        'Titi':["Titillium Web", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

