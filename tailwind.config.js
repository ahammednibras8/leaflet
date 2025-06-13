// tailwind.config.js
module.exports = {
  content: [
    "./*.html", // This is crucial for plain HTML files in the root
    "./src/**/*.{html,js,ts,jsx,tsx}", // Example for other project structures
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}