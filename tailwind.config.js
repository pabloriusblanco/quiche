/** @type {import('tailwindcss').Config} */

import { Colors } from "./src/utils/colors";

export default {
  safelist: [
    {
      pattern:
        /(bg|text|border|shadow|fill|stroke|outline)-(primary|secondary|black|grayscale|success|alert|infolight)[-(ultralight|light|semilight|semidark|dark|graytext|background|body)]?/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
    {
      pattern: /grid-cols-(1|2|3|4|5|6)?/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
  ],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: Colors.primary,
        secondary: Colors.secondary,
        danger: Colors.danger,
        success: Colors.success,
        black: Colors.black,
      },
    },
    screens: {
      // <= 639px Mobile
      'md': '640px', // > Tablet 
      'lg': '900px', // Laptop
      'xl': '1360px', // Desktop
      '2xl': '1921px',
    },
  },
  plugins: [],
};
