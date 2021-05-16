export interface IHttpResponse<T> {
  success: boolean;
  reason?: string;
  data?: T;
}
