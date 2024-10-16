/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slowBounce: 'slowBounce 6s infinite', // Set the duration to 1 second
      },
      keyframes: {
        slowBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-90px)' }, // Adjust the height as needed
        },
      },
    },
  },
  plugins: [],
}