import "./App.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary, PageLoading } from "@/components/layouts";
import { Page404 } from "@/pages";
import { AUTH_ROUTES, PRIVATE_ROUTES } from "@/routes";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { RootLayout, AuthLayout } from "@/components/layouts";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index path="/" element={<Navigate to={PRIVATE_ROUTES[0].path} />} />
                {PRIVATE_ROUTES.map(({ path, element }) => (
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
              <Route path="/" element={<AuthLayout />}>
                {AUTH_ROUTES.map(({ path, element }) => (
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
              <Route path="*" element={<Page404 />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
