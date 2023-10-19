/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'secondColor': "#F9F8F8",
      'mainColor': "#9D3534",
    },
  },
  plugins: [require("daisyui")],
};
