import { Inject, Injectable } from '@nestjs/common';
import { IUserBalanceModel } from './user-balance.model';

@Injectable()
export class AccountService {
  constructor(
    @Inject('UserBalanceModel')
    private readonly userBalanceModel: IUserBalanceModel,
  ) {}

  async changeBalance({ userId, delta }: { userId: number; delta: number }) {
    // TODO: implement
  }

  async getBalance({ userId }: { userId: number }) {
    const record = await this.userBalanceModel.findOne({ where: { userId } });
    return record ? record.balance : null;
  }
}
