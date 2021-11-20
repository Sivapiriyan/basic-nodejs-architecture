/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 08:21:18
 * @modify date 2021-11-20 08:21:18
 * @desc [description]
 */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express from 'express';
import Logger from './loaders/logger';

async function startServer() {
  const app = express();
  await require('dotenv').config();
  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/

  const http = require('http').Server(app);

  await require('./loaders').default({ expressApp: app });

  // @ts-ignore
  http.listen(process.env.SERVICE_PORT, (err: any) => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }
    Logger.info(`🛡️  Server listening on port: ${process.env.SERVICE_PORT} 🛡️`);
  });
}

startServer();
