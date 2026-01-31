/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a0e27',
          blue: '#1e3a8a',
          purple: '#7c3aed',
          cyan: '#06b6d4',
          teal: '#14b8a6',
        }
      }
    },
  },
  plugins: [],
}

