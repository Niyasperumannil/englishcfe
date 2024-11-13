import { linearGradient } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage:{
        'cover1':'linear-gradient(to bottom ,rgba(1, 16, 186, 0.411),rgba(1, 16, 186, 0.411)),url("/english.jpg")',
        'cover2':'linear-gradient(to bottom ,rgba(1, 16, 186, 0.411),rgba(1, 16, 186, 0.411)),url("/logo1.png")',
        'cover3':'linear-gradient(to bottom ,rgba(1, 16, 186, 0.411),rgba(1, 16, 186, 0.411)),url("/contact.jpg")',
      }
    },
  },
  plugins: [  

  ],
}

