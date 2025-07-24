/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      MonomaniacOne:['Monomaniac One', 'sans-serif'],
      Raleway: [ 'Raleway', 'sans-serif']
    },
    extend: {
      gridTemplateRows: {
        'layout' : '70px 1fr 150px',
      },
      maxWidth: {
        frame: '1024px'
      },
      colors: {
        backgroundCV:'#E6F1FA'
      },
      boxShadow: {
        shadowExpCV: ' 8px 16px 8px #c6e4fe',
        shadowSkillCV: ' 0px 16px 20px rgb(0 0 0 / 0.2)',
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '48px',
        '6xl': '60px',
      },
    },
  },
  plugins: [],
}

