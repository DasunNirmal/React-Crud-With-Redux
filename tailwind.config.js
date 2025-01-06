/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Default sans-serif font family will be Poppins
      },
    }
  },
  plugins: []
}
