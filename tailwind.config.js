const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      letterSpacing: {
        widest: '3em',
      },
      colors:
      {
        nav:"#013220",
        background:"#D4E9E2",
      },
      borderWidth:
      {
        '12':'12px'
      },
      width: {
      47.5:"11.875rem",
        140.25:"35.0625rem",
        81.25:"20.315rem"
      },
      margin:
      {
        53.4:"13.353rem",
      },
      fontSize:
      {
        14:"1.75rem",
        4.75:"1.1875rem"
      },
      backgroundImage: theme => ({
        'landing-page': "url('./Images/hero-mobile_2021.webp')",
       }),

       backgroundPosition: {
        '1/2': '50%',
        '2/2.5': '40% 100%',
       },

       backgroundSize: {
         'auto-100%': 'auto 100%',
         'auto-50%': 'auto 50%',
       },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
      transform: ['hover', 'focus']
    },
  },
  plugins: [],
}
