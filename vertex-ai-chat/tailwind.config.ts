import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Next.jsのファイルを対象にする
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // カスタムカラー
        secondary: "#FFC107",
      },
      ringColor: {
        primary: "#4CAF50", // focus:ring-primaryで使うための設定
      },
    },
  },
  plugins: [],
} satisfies Config;
