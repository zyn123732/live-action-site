import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ember: "#b54a24",
        coal: "#151515",
        fog: "#f1ece4",
        brass: "#9f7b49"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(181,74,36,0.38), transparent 30%), radial-gradient(circle at 80% 20%, rgba(159,123,73,0.22), transparent 22%)"
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
