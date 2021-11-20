interface IUser {
  id: number;
  userName: string;
  email: string;
  registerNumber: string;
  contactNumber: number;
  dateOfBirth: Date;
  active: number;
  status: number;
  password: string;
  twoFactorAuth: number;
  expiryDate: Date;
  otp: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: number;
  updatedBy: number;
}

interface IUserService {
  createUser(payload: IUser): Promise<IResponse>;
}
interface IUserCreateValidation {
  userName: string;
  email: string;
  registerNumber: string;
  contactNumber: number;
  twoFactorAuth: number;
  expiryDate: Date;
  dateOfBirth: Date;
  createdBy: number;
}

interface IResponse {
  message: string;
  response: IUser | null | undefined;
}

export { IUser, IUserCreateValidation, IUserService, IResponse };
