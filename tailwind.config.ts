import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme'
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)', ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: '376px',
        md: '782px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        labelFill: {
          'green': '#CCF0EB',
          'purple': '#E0D4FC',
          'red': '#FCD7D4',
          'orange': '#FFEDDD',
          'pink': '#F6DDFF',
          'blue': '#DEE8FF',
        },
        labelText: {
          'green': '#00B69B',
          'purple': '#6226EF',
          'red': '#EF3826',
          'orange': '#FFA756',
          'pink': '#D456FD',
          'blue': '#5A8CFF',
        },
        neutral: {
          '0': '#ffffff',
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
          '950': '#020617',
        },
        gray: {
          '100': '#AFAFAF',
          '200': '#9F9F9F',
          '300': '#8B8B8B',
          '400': '#4D4D4D',
          '500': '#414141',
          '600': '#383838',
          '700': '#1B1B1B',
          '800': '#131313',
          '900': '#080808',
        },
      }
    },
  },
  plugins: [],
};
export default config;
