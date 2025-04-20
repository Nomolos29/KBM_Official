import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slider: {
          '0%':   { transform: 'translateX(0%)' },        // Image 1
          '25%':  { transform: 'translateX(0%)' },        // pause on Image 1
    
          '30%':  { transform: 'translateX(-100%)' },     // Slide to Image 2
          '55%':  { transform: 'translateX(-100%)' },     // pause on Image 2
    
          '60%':  { transform: 'translateX(-200%)' },     // Slide to Image 3
          '85%':  { transform: 'translateX(-200%)' },     // pause on Image 3
    
          '90%':  { transform: 'translateX(0%)' },        // Slide back to Image 1
          '100%': { transform: 'translateX(0%)' },        // pause before restart
        },
      },
      animation: {
        'slide': 'slider 200s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
