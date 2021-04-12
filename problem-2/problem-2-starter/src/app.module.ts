import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import UserBalanceModel from './user-balance.model';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [
    AccountService,
    { provide: 'UserBalanceModel', useValue: UserBalanceModel },
  ],
})
export class AppModule {}
