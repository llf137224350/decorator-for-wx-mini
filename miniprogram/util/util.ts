/**
 * 小于10的前补0操作
 * @param num
 */
export function formatNumber(num: number | string): string {
  num = num.toString();
  return `0${num}`.slice(-2);
}
