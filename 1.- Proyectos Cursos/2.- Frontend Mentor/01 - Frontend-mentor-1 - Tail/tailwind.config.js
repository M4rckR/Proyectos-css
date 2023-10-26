/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        "violet" : "hsl(257, 40%, 49%)",
        "softMagenta" : "hsl(300, 69%, 71%)"
      },
      fontFamily : {
        "open": ["'Open Sans'", 'sans-serif'],
        "poppins" : ["'Poppins'", 'sans-serif']
      },
      backgroundImage : {
        "img-mobile" : "url('../images/bg-mobile.svg')",
        "img-desktop" : "url('../images/bg-desktop.svg')",
        "img-logo" : "url('../images/logo.svg')"
      }
    },
  },
  plugins: [],
}

