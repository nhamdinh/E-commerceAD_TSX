import { lazy } from "react";

export * from "./ErrorBoundary";
export * from "./PageLoading";

export const AuthLayout = lazy(() => import("./AuthLayout"));
export const RootLayout = lazy(() => import("./RootLayout"));
