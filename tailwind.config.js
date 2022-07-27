const tailwindScrollbarHide = require("tailwind-scrollbar-hide");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "500px",
      lg: "800px",
      xl: "980px",
    },
    extend: {
      fontFamily: {
        netflix: "NetflixSansRegular",
      },
      spacing: {
        "%5": "5%",
      },
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 75%) 0px 3px 10px",
      },
      colors: {
        navbar: "rgb(20, 20, 20)",
        "netflix-red": "#e50914",
        "netflix-bg-gray": "#141414",
        "gray-1": "#b3b3b3",
        "gray-2": "#e5e5e5",
        "gray-3": "#4b4b4b",
        "modal-text-green": "#46d369",
        "modal-black": "#181818",
        "modal-button": "rgba(42,42,42,.6)",
        "modal-button-hover": "rgba(255, 255, 255, 0.1)",
        "modal-button-border": "rgba(255,255,255,.5)",
        "modal-gradient": "linear-gradient(to top, #181818, transparent 50%)",
        "login-card": "rgba(0,0,0,.75)",
        "gray-4": "rgba(31, 31, 31, 0.75)",
        "carousel-button": "rgba(20, 20, 20, 0.5)",
        "carousel-button-hover": "rgba(20, 20, 20, 0.7)",
        "more-info-button": "rgba(109, 109, 110, 0.7)",
      },
      backgroundImage: {
        "navbar-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, .7) 10%, transparent)",
        "billboar-bottom-gradient":
          "linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414)",
        "billboard-gradient":
          "linear-gradient(77deg, rgba(0, 0, 0, .6), transparent 85%)",
        "background-gradient":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);",
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};
