module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      '0.5':'0.125rem',
      '4':'1rem',
      '5':'1.25rem',
      '8':'2.5rem',
      '13':'2rem',
      '16':'3rem',
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
