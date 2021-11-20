/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserService } from '../../services/user/user.service';
import { ResponseService } from '../../services/response/response.service';
import { exceptionHandler, getBody } from '../../shared/utility';
import { Database } from '../../shared/db';
import { IUser } from '../../services/user/user.interface';

export default async (event: IUser, context: unknown): Promise<unknown> => {
  try {
    // isAuth(event, 'unknown');
    const database: Database = new Database();
    const cardService: UserService = new UserService(database);
    event = getBody(event);
    const _response: any = await cardService.createUser(event);
    return new ResponseService().success(context, _response);
  } catch (err) {
    console.log(err);

    return exceptionHandler(context, err);
  }
};
