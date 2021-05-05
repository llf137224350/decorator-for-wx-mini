/**
 * 网络请求标准返回
 */
export interface Result<T> {
  code: number;
  data: T;
  message: string;
}
