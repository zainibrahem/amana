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
      '0.5':'0.125rem',
      '1':'1.25rem',
      '2':'1.5rem',
      '4':'1rem',
      '5':'1.25rem',
      '6':'2rem',
      '7':'2.3rem',
      '8':'2.5rem',
      '13':'2rem',
      '13':'2rem',
      '16':'3.5rem',
      '20':'5rem',
      '28':'7rem',
      '32':'8rem',
      '36':'9rem',
      '40':'10rem',
      '80':'13rem',
      '90':'15rem',
      '120':'20rem',
      'full':'100%',
      'screen':'100vh',
      '1/12': '8.3%',
      '2/12': '15.6%',
      '4/12': '39%',
      '5/12':'55%',
      '9/12':'78%',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
