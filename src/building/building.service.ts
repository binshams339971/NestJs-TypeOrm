import { Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BuildingEntity } from "./building.entity";
import { CreateBuildingDTO } from "./create-building.dto";


@Injectable()
export class BuildingService {
    constructor(@InjectRepository(BuildingEntity) private buildingRepository: Repository<BuildingEntity>) { }
    
    public async getAllBuildings(){
        return await this.buildingRepository.find({
            loadRelationIds: true,
          });
    }

    public async createBuilding(building){
       try{
        const createdBuilding = await this.buildingRepository.save(building);
        return createdBuilding;
       }catch(error){
        return error.message;
       }
    }
    
}
