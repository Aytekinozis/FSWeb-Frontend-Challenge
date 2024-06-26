/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "my-purple": "#4731D3",
        "my-green": "#CBF281",
        "my-darkpurple": "#171043",
        "my-darkgreen": "#1A210B",
        "my-black": "#252128",
      },
      minHeight: {
        152: "38rem",
        200: "50rem",
      },
      minWidth: {
        136: "34rem",
      },
      maxWidth: {
        136: "34rem",
      },
      width: {
        136: "34rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
