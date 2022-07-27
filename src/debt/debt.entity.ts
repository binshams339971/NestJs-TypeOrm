import { BuildingToDebtEntity } from "src/buildingToDebt/buildingToDebt.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DebtEntity{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public type: string;

    @Column()
    public metadataUrl: string;

    @OneToMany(() => BuildingToDebtEntity, buildingToDebt => buildingToDebt.debt, { eager: true })
    public buildingToDebts!: BuildingToDebtEntity[];
    
}