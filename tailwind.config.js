module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      '0':'0rem',
      '0.5':'0.125rem',
      '0.7':'0.5rem',
      '1':'1.25rem',
      '2':'1.5rem',
      '4':'1rem',
      '5':'1.25rem',
      '6':'2rem',
      '7':'2.3rem',
      '8':'2.5rem',
      '9':'2.6rem',
      '13':'2rem',
      '14':'3rem',
      '16':'3.5rem',
      '20':'5rem',
      '24':'6rem',
      '28':'7rem',
      '32':'8rem',
      '36':'9rem',
      '40':'10rem',
      '41':'10.5rem',
      '80':'13rem',
      '90':'15rem',
      '110':"18rem",
      '120':'20rem',
      '140':'30rem',
      'full':'100%',
      'screen':'100vh',
      '1/2': '50%',
      '2/3': '75%',
      '3/5': '60%',
      '1/12': '8.3%',
      '2/12': '15.6%',
      '4/12': '39%',
      '5/12':'55%',
      '9/12':'78%',
      'auto':'auto',
     }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),  ],
}
