/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "back-ground": "#F7F6F1",
        secondary: "#7F848B",
        primary: "#DDAC58",
      },
    },
  },
  plugins: [],
};
