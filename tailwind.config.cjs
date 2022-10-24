/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      colors: {
        t900: "#46433F",
        t800: "#67635D",
        t700: "#8A857D",
        t600: "#A19D97",
        t500: "#D0CECA",
        t400: "#E8E6E5",
        t300: "#EEEAE5",
        t200: "#F3F2F0",
        t100: "#FAFAF9",

        tGreen:{
          100: "#86E0C1"
        },

        tOrange: {
          500: "#FF5858",
        },

        tRed: {
            500: "#FF5858",
        },

        tGray: {
          100: "#F9F9F9",
          200: "#F2F2F2",
          300: "#E7e7e7",
          350: "#DBDBDB",
          400: "#6B7280",
          500:'#4C4F52',
          600: "#7d7d7f",
          700:'#151B31',
          800: "#9F9F9F",
          900:'#5B5F6F'

        },

        tPurple: {
          100: '#E7EDF1',
          300:"#E0E4F0"
        },

        primary: "#011D31",
        primaryLight: "#6360FF",
        primaryDark: "#2915A5",
        secondary: "#F13838",
        soft: "#F5F3FF",
        softText: "#878683",
        "black-soft": "#6C757D",
        tBaseColor: "#F5F3F0",
        error: "#DE1C1C",
        errorSoft: "#FF4747",
        errorStrong: "#B80000",
        success: "#10B981",
        successSoft: "#5CDA9D",
        successStrong: "#029C52",
        border: "#E8E6E5",
        tPurple100: "#F5F3FF",
        tPurple200: "#C6BCFF",
        tPurple300: "#EEEBFF",
        tPurple500: "#4A2CFE",
        graySoft: "#EBEAE8",
        tableGray: "#FAF9F7",
        softPurple: "#E5E0FF",
        softBlack: "#767676",
        card: "#D2d2d2",
      },
      spacing: {
        form: "27rem",
      },
      maxWidth: {
        form: "27rem",
      },
      minWidth: {
        form: "27rem",
      },

      boxShadow: {
        card: "0px 2px 5px rgba(138, 133, 125, 0.2)",
        toggle: "0px 1px 3px rgba(0, 0, 0, 0.1) 0px 1px 2px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
