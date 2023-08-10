import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async createUser(info: User): Promise<User> {
    const user = await this.userModel.create(info);
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async updateUserById(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, {
      runValidators: true,
      new: true,
    });
  }
  async deleteUserById(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
