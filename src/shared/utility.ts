/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ResponseService } from '../services/response/response.service';

/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 08:21:43
 * @modify date 2021-11-20 08:21:43
 * @desc [description]
 */

function exceptionHandler(context: any, error: any) {
  // Save a reference to the original method
  try {
    switch (error.name) {
      case 'InternalServerError':
        return new ResponseService().error(
          context,
          { error: error.name, message: error.data },
          500
        );
      case 'BadRequest':
        return new ResponseService().error(
          context,
          { error: error.name, message: error.data },
          400
        );
      case 'DuplicateError':
        return new ResponseService().error(
          context,
          { error: error.name, message: error.data },
          409
        );
      case 'NoContent':
        return new ResponseService().error(
          context,
          { error: error.name, message: error.data },
          204
        );
      case 'UnAuthorized':
        return new ResponseService().error(
          context,
          { error: error.name, message: error.data },
          401
        );
      case 'NoChanges':
        return new ResponseService().error(
          context,
          { error: error.name, message: error.data },
          412
        );
      case 'DependencyModule':
        return new ResponseService().error(
          context,
          { error: error.name, message: error.data },
          424
        );
      case 'NotFound':
        return new ResponseService().error(
          context,
          { error: error.name, message: error.data },
          404
        );
      case 'AlreadyLink':
        return new ResponseService().error(
          context,
          { error: error.name, message: error.data },
          423
        );
      case 'Active':
        return new ResponseService().error(
          context,
          { error: error.name, message: error.data },
          406
        );
      case 'Block':
        return new ResponseService().error(
          context,
          { error: error.name, message: error.data },
          405
        );
      default:
        return new ResponseService().error(
          context,
          { error: JSON.stringify(error) },
          500
        );
    }
  } catch (error) {
    return new ResponseService().error(
      context,
      { error: JSON.stringify(error) },
      500
    );
  }
}
function getBody(event: any): any | null {
  return event && event.body ? event.body : null;
}

export { exceptionHandler, getBody };
