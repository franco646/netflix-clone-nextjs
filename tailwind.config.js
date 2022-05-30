const tailwindScrollbarHide = require("tailwind-scrollbar-hide");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        netflix: "NetflixSansRegular",
      },
      spacing: {
        "%5": "5%",
      },
      colors: {
        "netflix-red": "#e50914",
        "netflix-bg-gray": "#141414",
        "gray-1": "#b3b3b3",
        "gray-2": "#e5e5e5",
        "gray-3": "#4b4b4b",
        "login-card": "rgba(0,0,0,.75)",
        "gray-4": "rgba(31, 31, 31, 0.75)",
      },
      backgroundImage: {
        "background-gradient":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);",
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};
