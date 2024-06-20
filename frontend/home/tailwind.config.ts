import type { Config } from "tailwindcss";

const config: Config = {

  
      content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
      ],

  theme: {
    extend: {
      fontFamily:{
        sans:["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF0000",
        secondary: "#630000",
      },
      container:{
        center : true,
        padding:{
          default: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
};
export default config;
