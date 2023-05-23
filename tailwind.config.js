/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif;",
      },
      colors: {
        grayish: "#E1E2E5",
        grayishTxt: "#808080",
        grayHover: "#222222",
        blue: "#045de9",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
