import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BuildingModule } from './building/building.module';
import { DebtModule } from './debt/debt.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {typeOrmConfig} from './config/typeorm.config'

@Module({
  imports: [UserModule, BuildingModule, DebtModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
