import { Suspense, ReactNode, memo } from "react";
import { Route } from "react-router-dom";
import { ErrorBoundary, PageLoading } from "@/components/layouts";

import { RootLayout, AuthLayout } from "@/components/layouts";
interface RouteType {
  path: string;
  element: ReactNode;
}
interface LayoutWrapperProps {
  layout: "root" | "auth";
  routes: RouteType[];
}

const LayoutWrapper = memo(({ layout, routes }: LayoutWrapperProps) => {
  const LayoutComponent = layout === "root" ? RootLayout : AuthLayout;

  return (
    <Route path="/" element={<LayoutComponent />}>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoading />}>
              <ErrorBoundary>{element}</ErrorBoundary>
            </Suspense>
          }
        />
      ))}
    </Route>
  );
});
