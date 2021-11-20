/**
 * @author Lingeswaran Sivapiriyan
 * @email l.s.piriyan@gmail.com
 * @create date 2021-11-20 08:21:30
 * @modify date 2021-11-20 08:21:30
 * @desc [description]
 */
import * as mysql2 from 'mysql2';
import { Model, Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize/types';

import { User } from '../models';

type DatabaseContext = Sequelize;
type Repository<M> = (new () => M) & NonAbstract<typeof Model>;

type NonAbstract<T> = {
  [P in keyof T]: T[P];
};

export class Database {
  public get transaction(): Transaction {
    if (!this._transaction) {
      throw new Error('Db connection or transaction is not initialized');
    }
    return this._transaction;
  }
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
  private static instance: Database;
  private readonly _establishConnection: Sequelize =
    this.getSequelizeConnection();
  private _transaction: Transaction | undefined;

  public get establishConnection(): DatabaseContext {
    return this._establishConnection;
  }

  private getSequelizeConnection(): DatabaseContext {
    return sequelizeConnection();
  }
}

function connection(): Database {
  return Database.getInstance();
}
function sequelizeConnection(): Sequelize {
  return new Sequelize(
    `mysql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_SCHEMA}`,
    {
      dialect: 'mysql',
      dialectModule: mysql2, // Needed to fix sequelize issues with WebPack
      dialectOptions: { connectTimeout: 60000 },
      models: [User]
    }
  );
}
export { connection, DatabaseContext, Repository };
