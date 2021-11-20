import { Router } from 'express';

import createUser from './createUser';

const route = Router();

export default (app: Router): void => {
  app.use('', route);
  route.post('/createuser', createUser);
};
