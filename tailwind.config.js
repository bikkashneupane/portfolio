/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-850": "#27272a", // custom color between gray-900 and gray-800
      },
    },
  },
  plugins: [],
};
