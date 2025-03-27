import { ToastOptions } from "react-toastify";

export const REACT_ENV = import.meta.env.VITE_PUBLIC_ENV;
export const API_LINK =
  import.meta.env.VITE_API_URL ??
  "http://ec2-18-139-1-145.ap-southeast-1.compute.amazonaws.com:5000/api";
export const SOCKET_HOST =
  import.meta.env.VITE_API_URL ??
  "http://ec2-18-139-1-145.ap-southeast-1.compute.amazonaws.com:6000";
/* env */
export const NAME_STORAGE = "nameAdmin";
export const ACCESSTOKEN_STORAGE = "accessTokenAdmin";
export const LANG_STORAGE = "langAdmin";
export const FOLDER_CATEGORYS_STORAGE = "categorys";
export const FOLDER_PRODUCS_STORAGE = "products";
export const PAGE_SIZE = 8;
export const PAGE_SIZE_10 = 10;
export const DATE_FORMAT = "YYYY-MM-DD";

export const _ToastOptions: ToastOptions = {
  position: "top-right",
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
};
