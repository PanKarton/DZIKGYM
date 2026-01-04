import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-obviously)", "system-ui", "sans-serif"],
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
} satisfies Config;
