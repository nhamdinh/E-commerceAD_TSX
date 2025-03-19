import { useState } from "react";
import { Button, Layout } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { useAuth } from "@/hooks";

import { SideBar } from "./components/SideBar";
import { AppModal } from "@/modules/Shared";
import { LanguageSwitcher } from "@/components/shared";

const { Content, Sider, Header } = Layout;
const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { isLogin } = useAuth();
  if (1)
    return (
      <Layout className="min-h-screen w-full">
        <Sider trigger={null} collapsedWidth="0" breakpoint="lg" collapsible collapsed={collapsed}>
          <SideBar />
        </Sider>
        <Layout>
          <Header className="bg-white p-0">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="text-base w-16 h-16 block lg:hidden"
            />
            <div className="float-end pr-4">
              <LanguageSwitcher />
            </div>
          </Header>
          <Content className="m-[12px_8px_0] md:m-[24px_16px_0]">
            <div className="p-2 md:p-6">
              <Outlet />
            </div>
          </Content>
        </Layout>
        <AppModal />
      </Layout>
    );
  return <Navigate to="/login" />;
};
export default RootLayout;
