/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "hover:border-orange-300",
    "hover:border-blue-300",
    "hover:border-green-400",
    "hover:border-gray-400",
    "hover:border-cyan-200",
    "hover:border-green-300",
    "text-orange-300",
    "text-blue-300",
    "text-green-400",
    "text-gray-400",
    "text-cyan-200",
    "text-green-300"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
