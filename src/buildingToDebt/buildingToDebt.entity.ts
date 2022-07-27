import { BuildingEntity } from "src/building/building.entity"
import { DebtEntity } from "src/debt/debt.entity"
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class BuildingToDebtEntity {
    @PrimaryGeneratedColumn()
    public buildingToDebtId!: number

    @Column()
    public buildingId!: number

    @Column()
    public debtId!: number

    @Column()
    public amount!: number

    @ManyToOne(() => BuildingEntity, (buildingEntity) => buildingEntity.buildingToDebts)
    public building!: BuildingEntity;

    @ManyToOne(() => DebtEntity, (debt) => debt.buildingToDebts)
    public debt!: DebtEntity;
}