import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/schemas/user.schema';
import { CreateUserDTO, UpdateUserDTO } from './dtos/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUser(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @Post('create')
  async createUser(@Body() user: CreateUserDTO): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Get(':id')
  async findUserById(@Param('id') userId: string): Promise<User> {
    return this.userService.findById(userId);
  }

  @Put(':id')
  async updateUserById(
    @Param('id') id: string,
    @Body() user: UpdateUserDTO,
  ): Promise<User> {
    return await this.userService.updateUserById(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return await this.userService.deleteUserById(id);
  }
}
