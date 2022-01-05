module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: '#3BAF9F',
        sideBar: '#8fbc8f',
        lightgreen: '#d4e5c5',
        gray: '#dee0e2'
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/hero-bg.png')",
        'how': "url('/how-it-works-bg.png')",
        'login': "url('/login-bg.png')",
        'sigunp': "url('/signup-bg.png')"
      },
      dropShadow: {
        'lg': '0 35px 35px FFC069',
      }
    },
  },
  plugins: [],
}
