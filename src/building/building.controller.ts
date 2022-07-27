import { Body, Controller, Get, Post } from '@nestjs/common';
import { BuildingService } from './building.service';
import { CreateBuildingDTO } from './create-building.dto';


@Controller('building')
export class BuildingController {
  constructor(private buildingService: BuildingService) {}
  @Get()
  async findAll() {
    return await this.buildingService.getAllBuildings();
  }

  @Post()
  async create(@Body() building: CreateBuildingDTO) {
    //return building;
    return await this.buildingService.createBuilding(building);
  }
}