/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgRegister': "url('/bg-register.jpg')",
        'bgLogin': "url('/bg-login.jpg')",
      }
    },
  },
  plugins: [],
}
