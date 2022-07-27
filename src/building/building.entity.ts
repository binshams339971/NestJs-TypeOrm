import { BuildingToDebtEntity } from "src/buildingToDebt/buildingToDebt.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BuildingEntity{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public web2BuildingId: number;

    @Column()
    public metadataUrl: string;

    @ManyToOne(() => UserEntity, (user) => user.building)
    user: UserEntity;

    @OneToMany(() => BuildingToDebtEntity, buildingToDebt => buildingToDebt.building)
    public buildingToDebts!: BuildingToDebtEntity[];
    
}