import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateDebtDTO{
    @IsNotEmpty()
    buildingId: number;

    @IsNotEmpty()
    type: string;
    
    @IsNotEmpty()
    metadataUrl: string;
 
}