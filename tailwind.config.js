// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}", // Include all your source files
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }




/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // If you're using a Vite app
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/React files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
