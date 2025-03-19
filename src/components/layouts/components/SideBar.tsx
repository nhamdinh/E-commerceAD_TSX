import { Avatar, Button } from "antd";
import { NavLink, Link } from "react-router-dom";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import viteLogo from "/vite.svg";

// import { cn } from '@/utils';
import { PRIVATE_ROUTES } from "@/routes";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks";

export const SideBar = () => {
  const { logout } = useAuth();
  const { t } = useTranslation();
  // const { open, close } = useConfirmModal();

  const handleLogout = () => {
    // open({
    //   title: t('logout'),
    //   description: t('logoutDescription'),
    //   onOk: () => {
    //     logout();
    //     close();
    //   },
    //   onCancel: () => {
    //     close();
    //   },
    // });
  };

  return (
    <section className="flex h-full flex-col justify-between px-2 py-8 text-white">
      <div>
        <Link to="/" className="flex items-center justify-center">
          <img
            src={viteLogo}
            width={"auto"}
            height={50}
            alt="logo"
            className="select-none object-cover"
          />
        </Link>
        <div className="mt-8">
          <ul className="list-none">
            {PRIVATE_ROUTES.map((route) =>
              route.showNavLink ? (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    // className={({ isActive }) => {
                    //   return cn(
                    //     'mb-1 block w-full cursor-pointer rounded-lg px-4 py-2 text-white transition-colors hover:bg-white/20 hover:text-white',
                    //     isActive ? 'bg-white/20' : 'bg-transparent',
                    //   );
                    // }}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-t pt-8">
        <Avatar
          shape="square"
          className="flex items-center justify-center bg-white/20 text-white"
          size={64}
          icon={<UserOutlined />}
        />
        <p className="mt-2 font-semibold">Test</p>

        <Button
          type="text"
          className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg !bg-white/20 px-4 py-2 text-white transition-colors hover:!text-white"
          onClick={handleLogout}
        >
          {t("logout")}
          <LogoutOutlined />
        </Button>
      </div>
    </section>
  );
};
