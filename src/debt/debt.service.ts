import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BuildingToDebtEntity } from "src/buildingToDebt/buildingToDebt.entity";
import { Repository } from "typeorm";
import { DebtEntity } from "./debt.entity";


@Injectable()
export class DebtService {
    constructor(@InjectRepository(DebtEntity) private debtRepository: Repository<DebtEntity>, @InjectRepository(BuildingToDebtEntity) private buildingToDebtRepository: Repository<BuildingToDebtEntity>) { }
    
    public async getAllDebts(){
        return await this.debtRepository.find();
    }

    public async createDebt(debt){
       try{
        const createdDebt = await this.debtRepository.save(debt);
        const buildingToDebt= await this.buildingToDebtRepository.save({
            buildingId: debt.buildingId,
            debtId: debt.id,
            amount: 100
        })
        return createdDebt;
       }catch(error){
        return error.message;
       }
    }
    
}
