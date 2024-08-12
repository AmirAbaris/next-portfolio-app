import { nextui } from "@nextui-org/react";
import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: '#555555',
        mediumGrey: '#A3A3A3'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
