import { useEffect } from "react";
import NProgress from 'nprogress';

export const PageLoading = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: true });
    NProgress.start();
    return () => {
      NProgress.done();
    };
  });

  return null;
};
