import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./locales/i18n"; // Import cấu hình i18n
import "antd/dist/reset.css"; // CSS Ant Design
import "./index.css"; // CSS Tailwind
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
