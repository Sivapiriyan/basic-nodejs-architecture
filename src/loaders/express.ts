/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 16:01:35
 * @modify date 2021-11-20 16:01:35
 * @desc [description]
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../functions';

export default ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */

  app.get('/health', (_req, res) => {
    res.status(200).end();
  });

  // let express to use this
  // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(
    cors({
      credentials: true,
      origin: true
    })
  );

  // Some sauce that always add since 2014
  // "Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."
  // Maybe not needed anymore ?
  // app.use(require('method-override')());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());
  app.all('*', (req, res, next) => {
    const origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  // Load API routes
  app.use(
    process.env.API_PREFIX ? process.env.API_PREFIX : '/function',
    routes()
  );

  /// catch 404 and forward to error handler
  app.use((_req: any, _res: any, next) => {
    const err: any = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  /// error handlers
  app.use((err: any, res: any, next: any) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });
  app.use((err: any, _req: any, res: any) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message
      }
    });
  });
};
