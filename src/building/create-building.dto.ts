import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateBuildingDTO{
    @IsNotEmpty()
    web2BuildingId: number;

    @IsNotEmpty()
    metadataUrl: string;

    @IsNotEmpty()
    user: number;
}