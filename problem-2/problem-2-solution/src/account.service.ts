import { Inject, Injectable } from '@nestjs/common';
import { QueryTypes } from 'sequelize/types';
import { sequelize } from './sequelize';
import { IUserBalanceModel } from './user-balance.model';

@Injectable()
export class AccountService {
  constructor(
    @Inject('UserBalanceModel')
    private readonly userBalanceModel: IUserBalanceModel,
  ) {}

  async changeBalance({ userId, delta }: { userId: number; delta: number }) {
    const [
      ,
      numUpdated,
    ] = await sequelize.query(
      'UPDATE `user_balance` SET `balance` = `balance` + :delta\n' +
        'WHERE `user_id` = :userId AND `balance` + :delta >= 0',
      { type: QueryTypes.UPDATE, replacements: { userId, delta } },
    );
    if (numUpdated === 0) {
      throw new Error('Unable to update balance');
    }
  }

  async getBalance({ userId }: { userId: number }) {
    const record = await this.userBalanceModel.findOne({ where: { userId } });
    return record ? record.balance : null;
  }
}
