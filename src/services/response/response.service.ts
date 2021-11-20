/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 17:29:51
 * @modify date 2021-11-20 17:29:51
 * @desc [description]
 */

import { IResponse, IResponseService } from './response.interface';

export class ResponseService implements IResponseService {
  public success(
    context: any,
    body: unknown,
    status: number | undefined = 200
  ): IResponse {
    return context.status(status).send(body);
  }

  public error(
    context: any,
    body: any,
    status: number | undefined = 500
  ): IResponse {
    return context.status(status).send(body);
  }
}
