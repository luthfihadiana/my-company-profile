import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '2560px',
      },
      height: {
        'page': 'calc(100vh - 60px)',
        'items': 'calc(100vh - 200px)'
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      backgroundImage: {
        'animated-gradient': 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
      },
    },
    fontFamily:{
      "display": ["Plus Jakarta Sans, sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
