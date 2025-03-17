import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Button, ConfigProvider } from "antd";

function App() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const [count, setCount] = useState(0);

  const handleChangeLanguage = useCallback(
    async (langCode: string) => {
      await i18n.changeLanguage(langCode);
      document.documentElement.setAttribute("lang", langCode);
    },
    [i18n]
  );
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1890ff", // Màu chính của Ant Design
          borderRadius: 8, // Bo tròn góc
        },
      }}
    >
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {t("auth.passwordRequired")}</h1>
      <Button type="primary">Click me</Button>
      <button onClick={() => handleChangeLanguage("en")}>🇺🇸 English</button>
      <button onClick={() => handleChangeLanguage("kr")}>🇻🇳 Tiếng Việt</button>{" "}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-primary mb-4">Ant Design + Tailwind</h1>
        <Button type="primary" className="bg-primary">
          Click Me
        </Button>
      </div>
    </ConfigProvider>
  );
}

export default App;
