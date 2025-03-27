import { Layout } from "antd";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/hooks";
import { AppModal } from "@/modules/Shared";
import Toast from "@/components/layouts/LoadingErrorToast/Toast";

const { Content } = Layout;

const AuthLayout = () => {
  const { isLogin } = useAuth();
  if (isLogin) return <Navigate to="/" />;
  return (
    <Layout className="min-h-screen w-full px-4 md:px-0 bg-white">
      <Content>
        <Outlet />
      </Content>
      <AppModal />
      <Toast />
    </Layout>
  );
};
export default AuthLayout;
