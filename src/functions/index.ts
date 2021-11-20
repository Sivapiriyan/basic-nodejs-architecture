/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 16:01:52
 * @modify date 2021-11-20 16:01:52
 * @desc [description]
 */
import { Router } from 'express';
import user from './user/user.routes';

export default (): Router => {
  const app = Router();
  user(app);
  return app;
};
