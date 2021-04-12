import { Table, Model, Column, DataType } from 'sequelize-typescript';

interface IUserBalance {
  id: number;
  userId: number;
  balance: number;
  createdAt?: Date;
  updatedAt?: Date;
}

type ICreateArgs = Omit<IUserBalance, 'id' | 'createdAt' | 'updatedAt'>;

@Table({
  tableName: 'user_balance',
  indexes: [{ fields: ['user_id'], unique: true }],
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
class UserBalanceModel extends Model<UserBalanceModel, ICreateArgs>
  implements IUserBalance {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    field: 'user_id',
  })
  userId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  balance: number;
}

export type IUserBalanceModel = typeof UserBalanceModel;
export type IUserBalanceInstance = UserBalanceModel;

export default UserBalanceModel;
