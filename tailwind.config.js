/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  colors: {
      'blueBlack':'#00203FFF',
       'mainColor':'#ADEFD1FF'
    },
  },
  plugins: [require("daisyui")],
};
