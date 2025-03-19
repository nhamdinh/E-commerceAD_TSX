import { ConfigProvider } from "antd";
import { ReactNode, memo } from "react";

export const ThemeProvider = memo(({ children }: { children: ReactNode }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#1890ff",
        borderRadius: 8,
      },
    }}
  >
    {children}
  </ConfigProvider>
));
