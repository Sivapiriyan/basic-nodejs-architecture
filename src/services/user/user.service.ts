/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 16:44:20
 * @modify date 2021-11-20 16:44:20
 * @desc [description]
 */

import { COMMAN } from '../../shared/constant';
import { User } from '../../models';
import { Database, DatabaseContext } from '../../shared/db';
import { RESPONSE, STATUS } from './constants';
import { IResponse, IUser, IUserService } from './user.interface';
import { createUserValidation } from './validations';

export class UserService implements IUserService {
  private readonly _dbConnection: DatabaseContext =
    this._db.establishConnection;

  public constructor(private readonly _db: Database) {}

  public async createUser(payload: IUser): Promise<IResponse> {
    const {
      userName,
      email,
      registerNumber,
      twoFactorAuth,
      createdBy,
      expiryDate,
      dateOfBirth,
      contactNumber
    } = payload;
    const transaction = await this._dbConnection.transaction();
    try {
      await createUserValidation(payload);
      const response: IUser = await this._dbConnection
        .getRepository(User)
        .create({
          userName,
          email,
          registerNumber,
          active: COMMAN.ACTIVE,
          otp: 2285,
          status: STATUS.PENDING,
          twoFactorAuth,
          expiryDate,
          createdBy,
          dateOfBirth,
          contactNumber
        });
      return { message: RESPONSE.CREATE_SUCCESS, response: response };
    } catch (error) {
      throw error;
    }
  }
}
