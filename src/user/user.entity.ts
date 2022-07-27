import { BuildingEntity } from "src/building/building.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column({ unique: true })
    public email: string;

    @Column()
    public password: string;

    @OneToMany(() => BuildingEntity, (buildingEntity) => buildingEntity.user, { eager: true })
    building: BuildingEntity[];
}