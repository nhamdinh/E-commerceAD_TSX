import { HomeScreen, Page1, Page1Detail, Page2 } from "@/pages";

export const PRIVATE_ROUTES = [
  {
    name: "HomeScreen",
    path: "/home",
    showNavLink: true,
    element: <HomeScreen />,
  },
  {
    name: "PAGE_1",
    path: "/page1",
    showNavLink: true,
    element: <Page1 />,
  },
  {
    name: "PAGE_1 Detail",
    path: "/page1/:id",
    showNavLink: false,
    element: <Page1Detail />,
  },
  {
    name: "PAGE_2",
    path: "/page2",
    showNavLink: true,
    element: <Page2 />,
  },
];
