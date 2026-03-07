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
        sage: {
          50: '#F4F6F4',
          100: '#E8ECE8',
          200: '#D1D9D1',
          300: '#B4C0B4',
          400: '#9BA89B',
          500: '#7D8C7D',
          600: '#5A6B5A',
          700: '#4A574A',
          800: '#3B453B',
          900: '#2D3B2D',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
