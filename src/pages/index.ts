import { lazy } from "react";

//auth
export const LoginPage = lazy(() => import("./auth/login"));
export const SignUpPage = lazy(() => import("./auth/sign-up"));

//dashboard
export const Page1 = lazy(() => import("./dashboard/page1"));
export const Page1Detail = lazy(() => import("./dashboard/page1/detail"));
export const Page2 = lazy(() => import("./dashboard/page2"));
