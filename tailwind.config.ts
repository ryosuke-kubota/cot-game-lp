import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C92B5B',
          dark: '#A0224A',
          light: '#E53670',
          50: '#FCE8EF',
          100: '#F9D1DF',
          200: '#F3A3BF',
          300: '#ED759F',
          400: '#E7477F',
          500: '#C92B5B',
          600: '#A0224A',
          700: '#771A37',
          800: '#4E1125',
          900: '#250912',
        },
        accent: {
          pink: '#C92B5B',
          purple: '#8B2B5B',
          dark: '#2d1135',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #1a0d1f 0%, #2d1135 50%, #1a0d1f 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
