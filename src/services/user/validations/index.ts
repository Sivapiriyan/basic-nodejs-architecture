/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 16:13:27
 * @modify date 2021-11-20 16:13:27
 * @desc [description]
 */

import { VALIDATION } from '../../../shared/constant';
import * as yup from 'yup';
import { BadRequest } from '../../../shared/error';
import { IUserCreateValidation } from '../user.interface';

const createUserValidation = async (
  data: IUserCreateValidation
): Promise<yup.Shape<object | undefined, IUserCreateValidation>> => {
  try {
    const schema: yup.ObjectSchema<
      yup.Shape<object | undefined, IUserCreateValidation>
    > = yup.object().shape({
      userName: yup.string().required(),
      email: yup
        .string()
        .required()
        .matches(
          VALIDATION.EMAIL,
          'You have entered an invalid email address!'
        ),
      registerNumber: yup.string().required(),
      contactNumber: yup.number().required(),
      dateOfBirth: yup.date().required(),
      expiryDate: yup.date().required(),
      twoFactorAuth: yup.number().required(),
      createdBy: yup.number().required()
    });
    const validationResponse: yup.Shape<
      object | undefined,
      IUserCreateValidation
    > = await schema.validate(data);
    return validationResponse;
  } catch (error) {
    const validationError: yup.ValidationError = <yup.ValidationError>error;
    const { message } = validationError;
    throw new BadRequest(message);
  }
};

export { createUserValidation };
