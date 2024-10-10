export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['72px','72px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      
        animation: {
          blob: "blob 3s infinite",
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(30px, -20px) scale(1.05)",
            },
            "66%": {
              transform: "translate(-30px, 20px) scale(0.95)",
            },
            "100%": {
              transform: "tranlate(0px, 0px) scale(1)",
            },
          },
        },

      
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        aldrich: ['Aldrich', 'sans-serif'],

      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#121481",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "red": "#FF4040",
        "new":"#03AED2"
        
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
       'md':' 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      },
      
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
        'back': "url('assets/images/backgr.jpg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}