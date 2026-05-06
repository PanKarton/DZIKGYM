import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-obviously)", "system-ui", "sans-serif"],
      },
      screens: {
        nav: "1300px",
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
} satisfies Config;
