/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-background": "#0a0012",
        "secondary-background": "#150025",
        "main-highlight-color": "#00ffa0"
      }
    },
  },
  plugins: [],
}
