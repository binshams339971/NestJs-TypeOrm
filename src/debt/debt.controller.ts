import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDebtDTO } from './create-debt.dto';
import { DebtService } from './debt.service';


@Controller('debt')
export class DebtController {
  constructor(private debtService: DebtService) {}
  @Get()
  async findAll() {
    return await this.debtService.getAllDebts();
  }

  @Post()
  async create(@Body() debt: CreateDebtDTO) {
    return await this.debtService.createDebt(debt);
  }
}