import { type Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        darkGrey: '#555555'
      },
      // fontFamily: {
      //   sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      // },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
