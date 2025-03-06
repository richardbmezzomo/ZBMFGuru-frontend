import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Garante que o Tailwind veja seus arquivos
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Adiciona a fonte Inter
        logo: ["Sigmar", "cursive"], // Adiciona a fonte Sigmar
      },
      colors: {
        primary: "#1E40AF", // Azul escuro personalizado
        secondary: "#EAB308", // Amarelo personalizado
      },
    },
  },
  plugins: [],
};

export default config;
