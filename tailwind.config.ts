import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      tablet: "1024px", // Tambahkan ukuran kustom "tablet"
      lg: "1280px", // Kembalikan default lg
      xl: "1536px",
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        theme: {
          brand: "#352B5A",
          donker: "#1E293B",
          border: "#475569",
          secondary: "#94A3B8",
          opacity: "#F1F5F9",
          gray: "#E4E4E7",
          red: "#BC1328",
        },
        input: {
          label: "#3F3F46",
          form: "#A1A1AA",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
