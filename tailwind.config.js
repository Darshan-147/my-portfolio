/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /(text|border)-(orange|blue|green|gray|cyan|red|yellow)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover']
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
