import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store/index.ts";

import "./locales/i18n"; // Import cấu hình i18n
import "antd/dist/reset.css"; // CSS Ant Design
import "./index.css"; // CSS Tailwind
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
