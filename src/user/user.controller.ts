import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async findAll() {
    return await this.userService.getAllUsers();
  }

  @Post()
  async create(@Body() user: CreateUserDTO) {
    return await this.userService.createUser(user);
  }
}