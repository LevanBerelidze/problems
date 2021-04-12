import { Sequelize } from 'sequelize-typescript';
import UserBalanceModel from './user-balance.model';

export const sequelize = new Sequelize({
  database: 'test_db',
  host: 'localhost',
  username: 'root',
  password: '',
  dialect: 'mysql',
  models: [UserBalanceModel],
  logging: false,
});
