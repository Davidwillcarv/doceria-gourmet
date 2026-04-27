/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cor-fundo': 'var(--cor-fundo)',
        'cor-texto': 'var(--cor-texto)',
        'cor-detalhe': 'var(--cor-detalhe-doce)',
        'cor-suave': 'var(--cor-suave)',
      },
      fontFamily: {
        // Sugestão de fontes para combinar com a delicadeza do logo
        // Script para títulos (lembrando o "Luz") e Serif para corpo elegante
        'script': ['"Pinyon Script"', 'cursive'], 
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Lato"', 'sans-serif'], // Para textos muito pequenos e botões
      },
    },
  },
  plugins: [],
}