import { REGEX_PASSWORD, REGEX_CURRENCY } from "@/utils";

export const passwordCheck = (pass: string): boolean => REGEX_PASSWORD.test(pass);

/**
 * Lấy tham số từ URL theo `id`
 */
export const getUrlParams = (id: string): string =>
  new URLSearchParams(window.location.search).get(id) ?? "";

/**
 * Loại bỏ tất cả ký tự không phải số
 */
export const removeNonNumeric = (num: string): number => Number(num.replace(/\D/g, ""));

/**
 * Định dạng số có dấu phân cách hàng nghìn
 */
export const addCommas = (num: number | string, style = ","): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, style);

/**
 * Định dạng tiền tệ với 2 số thập phân
 */
export const formatMoneyCurrency = (text: number | string): string => {
  if (!text) return "0.00";

  const numberText = Number(text).toFixed(2);
  const [integerPart, decimalPart] = numberText.split(".");

  return `${addCommas(removeNonNumeric(integerPart))}.${decimalPart}`;
};

/**
 * Trả về đối tượng HTML để render nội dung thô
 */
export const rawMarkup = (rawMarkup = ""): { __html: string } => ({ __html: rawMarkup });

/**
 * Định dạng số điện thoại khách hàng: `xxxx-xxx-xxxx`
 */
export const formatCustomerPhoneNumber = (value: string): string | undefined =>
  value ? `${value.slice(0, 4)}-${value.slice(4, 7)}-${value.slice(7)}` : undefined;

/**
 * Xóa dấu cách và ký tự không phải số trong số điện thoại
 */
export const formatPhone = (val: string): string => val.replace(/\D/g, "");

/**
 * Định dạng số tiền có dấu phẩy (kể cả số âm)
 */
export const formatMoney = (text: number | string): string => {
  if (!text) return "0";

  let num = Number(text);
  const formatted = num.toString().replace(REGEX_CURRENCY, "$1,");

  return num < 0 ? `-${formatted}` : formatted;
};

/**
 * Tìm các phần tử chỉ có trong `array1` mà không có trong `array2`
 */
export const findUniqueElements = <T>(array1: T[], array2: T[]): T[] =>
  array1.filter((item) => !array2.includes(item));
