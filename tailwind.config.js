/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1211ca',    // Azul principal
        accent: '#f9af08',     // Amarelo
        'text-primary': '#000000',
        'bg-primary': '#ffffff',
        'bg-secondary': '#f8f9fa',
        'footer': {
          bg: '#1211ca',       // Fundo do rodapé em azul
          text: '#ffffff',     // Texto do rodapé em branco
          accent: '#f9af08'    // Elementos de destaque em amarelo
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};