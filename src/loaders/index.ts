/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 16:01:40
 * @modify date 2021-11-20 16:01:40
 * @desc [description]
 */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import expressLoader from './express';
import Logger from './logger';
//We have to import at least all the events once so they can be triggered

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async ({ expressApp }: any) => {
  expressLoader({ app: expressApp });
  Logger.info('✔️ Express loaded');
};
