module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    height: {
      '0.5':'0.125rem',
      '1':'1.25rem',
      '2':'1.5rem',
      '4':'1rem',
      '5':'1.25rem',
      '6':'2rem',
      '8':'2.5rem',
      '13':'2rem',
      '16':'3.5rem',
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
