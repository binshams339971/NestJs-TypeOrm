import { Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./create-user.dto";
import { UserEntity } from "./user.entity";


@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }
    
    public async getAllUsers(){
        return await this.userRepository.find();
    }

    public async createUser(user: CreateUserDTO){
       try{
        const createdUser = await this.userRepository.save(user);
        return createdUser;
       }catch(error){
        return error.message;
       }
    }
    
}
