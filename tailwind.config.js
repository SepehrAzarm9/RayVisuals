/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      backgroundImage: {
        "custom-bg-gradient":
          "linear-gradient(93deg, #FFF 51.39%, #4A4A4A 123.8%)",
        "custom-svg": "url('/src/components/assets/svg/boxBackground.svg')",
      },
      fontFamily: {
        poppins: ["Poppins"],
        QwitcherGrypen: ["Qwitcher Grypen"],
        Inter: ["Inter"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        backgroundPurple: "#000212",
        customGray: "#4A4A4A",
        customGrayBorder: "#505050c9",
        customBlue: "#007AFF",
        customDarkBlue: "#000635",
        customCaptionGrey: "#969698",
        customBlueBorder: "#090F3E",
        teamCardBg: "#0A131E",
      },
    },
  },
  plugins: [],
};
