/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          gold: '#d4af37',
          rose: '#e11d48',
        },
      },
    },
  },
  plugins: [],
};
