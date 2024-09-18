/** @type {import('tailwindcss').Config,}} */




export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heropattern': "url('/src/assets/tweetrandom.png')",
        'catcard' : "url('/src/assets/image.png')"
      },
      fontFamily:{
        'inter' : "url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap')",
        'dm': "DM Sans", 

      }
    },
  },
  plugins: [],
  
   
}

