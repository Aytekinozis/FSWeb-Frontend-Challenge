/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-purple": "#4731D3",
        "my-green": "#CBF281",
      },
      minHeight: {
        168: "42rem",
      },
      minWidth: {
        136: "34rem",
      },
      width: {
        136: "34rem",
      },
    },
  },
  plugins: [],
};
