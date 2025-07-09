export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'super-bold': '900', // Adding a custom weight
        'ultra-bold': '950',  // Example of a heavier custom weight
      },
    },
  },
  plugins: [],
}
