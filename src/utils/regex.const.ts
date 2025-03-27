export const REGEX_ONLY_NUMBER = /^-?\d*(\.\d+)?$/;
export const REGEX_CURRENCY = /(\d)(?=(\d{3})+(?!\d))/g;
/**
 * Kiểm tra mật khẩu có đúng định dạng hay không.
 * Điều kiện:
 * - Ít nhất 1 số
 * - Ít nhất 1 chữ cái
 * - Ít nhất 1 ký tự đặc biệt (#?!@$%^&*-)
 * - Độ dài 8-20 ký tự
 */
export const REGEX_PASSWORD =
  /^(?=[^0-9\n]*[0-9])(?=.*[a-zA-Z])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,20}$/;
