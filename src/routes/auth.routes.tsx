import { LoginPage, SignUpPage } from "@/pages";

export const AUTH_ROUTES = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
];
