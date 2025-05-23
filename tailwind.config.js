/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1890ff", // Màu chính của Ant Design
        success: "#52c41a",
        warning: "#faad14",
        error: "#ff4d4f",
      },
    },
  },
  plugins: [],
};
