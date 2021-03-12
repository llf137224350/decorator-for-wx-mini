/**
 * 网络请求标准返回
 */
export interface IResult<T> {
  code: number;
  data: T;
  message: string;
}
