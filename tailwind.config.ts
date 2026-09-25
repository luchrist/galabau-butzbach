import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F6F2",
        creme: "#ECEAE3",
        ink: "#14181A",
        // Accent scales are derived from the customer logo: the grass mark
        // (laub) and the water wave underneath it (erde).
        laub: {
          50: "#EDF7EC",
          100: "#D2ECCF",
          200: "#A4D89E",
          300: "#73C06B",
          400: "#44A23E",
          500: "#1E7A28",
          600: "#17601F",
          700: "#124C19",
          800: "#0E3A14",
          900: "#09260D"
        },
        erde: {
          50: "#EAF3FA",
          100: "#CBE3F4",
          200: "#9CC9E8",
          300: "#6BACD8",
          400: "#3F8FC4",
          500: "#14659F",
          600: "#0F5285",
          700: "#0C4068",
          800: "#09304E",
          900: "#061F33"
        },
        kies: {
          50: "#F4F4F2",
          100: "#E6E6E2",
          200: "#CDCEC7",
          300: "#B0B2A9",
          400: "#94968C",
          500: "#7C7F78",
          600: "#63665F",
          700: "#4C4E48",
          800: "#363832",
          900: "#23261F"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
