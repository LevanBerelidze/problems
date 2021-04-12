import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Render,
} from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('/accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('/')
  @Render('accounts')
  getAccountsView() {
    return {};
  }

  @Get('/:userId/balance')
  async getBalance(
    @Param('userId', ParseIntPipe)
    userId: number,
  ) {
    const currentBalance = await this.accountService.getBalance({
      userId,
    });
    return { currentBalance };
  }

  @Post('/:userId/balance')
  changeBalance(
    @Param('userId', ParseIntPipe)
    userId: number,

    @Query('delta', ParseIntPipe)
    delta: number,
  ) {
    return this.accountService.changeBalance({
      userId,
      delta,
    });
  }
}
