/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'float': 'float 10s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backgroundImage: {
        'grid-pattern': 'repeating-linear-gradient(0deg, #ffffff10 0, #ffffff10 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #ffffff10 0, #ffffff10 1px, transparent 1px, transparent 40px)'
      }
    }
  },
  plugins: []
}
