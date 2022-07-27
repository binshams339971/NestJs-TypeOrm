import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingController } from './building.controller';
import { BuildingEntity } from './building.entity';
import { BuildingService } from './building.service';

@Module({
    imports: [TypeOrmModule.forFeature([BuildingEntity])],
    controllers: [BuildingController],
    providers: [BuildingService],
    exports: [],
})
export class BuildingModule {}
