import type { Config } from "tailwindcss";

const config: Config = {
  mode: "",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {  
    extend: {
      fontFamily: {
        normal: "GreycliffCF-Regular, sans",
        primary: "GreycliffCF-Medium, sans",
        secondary: "GreycliffCF-Bold, sans",
        black: "GreycliffCF-Heavy, sans"
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '414px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}

export default config;