/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 17:29:16
 * @modify date 2021-11-20 17:29:16
 * @desc [description]
 */

export interface IResponseService {
  success(context: any, body: unknown, status: number | undefined): IResponse;
  error(context: any, body: unknown, status: number | undefined): IResponse;
}

export interface IResponse {
  headers: unknown;
  body: unknown;
}
