import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingToDebtEntity } from 'src/buildingToDebt/buildingToDebt.entity';
import { DebtController } from './debt.controller';
import { DebtEntity } from './debt.entity';
import { DebtService } from './debt.service';

@Module({
    imports: [TypeOrmModule.forFeature([DebtEntity, BuildingToDebtEntity])],
    controllers: [DebtController],
    providers: [DebtService],
    exports: [],
})
export class DebtModule {}
