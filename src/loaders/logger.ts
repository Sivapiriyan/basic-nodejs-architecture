/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 16:01:45
 * @modify date 2021-11-20 16:01:45
 * @desc [description]
 */
/* eslint-disable */
import winston from 'winston';
import { ConsoleTransportInstance } from 'winston/lib/winston/transports';
// import config from '../../environment/env.json';

const transports: ConsoleTransportInstance[] = [];
if (process.env.NODE_ENV !== 'development') {
  transports.push(new winston.transports.Console());
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat()
      )
    })
  );
}

const Logger = winston.createLogger({
  level: 'silly',
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports
});

export default Logger;
