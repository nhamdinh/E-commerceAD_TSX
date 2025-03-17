module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        "> 1%", // Hỗ trợ tất cả trình duyệt có hơn 1% thị phần
        "last 2 versions", // Hỗ trợ 2 phiên bản gần nhất của trình duyệt
        "not dead", // Bỏ qua trình duyệt không còn được hỗ trợ
        "Firefox ESR", // Hỗ trợ phiên bản Firefox Extended Support Release
        "ie >= 11", // Hỗ trợ từ Internet Explorer 11 trở lên
      ],
      grid: true, // Bật hỗ trợ Grid Layout cho trình duyệt cũ
    },
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
