import { Injectable } from '@nestjs/common';
// import the Model and injetmodel from mongoose
import { Model,Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import the user schema
import { Users } from './schemas/users.schema';
import { FindUserInput, UpdateUserInput } from './inputs/users.input';

@Injectable()
export class UsersService {
    // inject the model into the service
    constructor(@InjectModel(Users.name) private readonly userModel: Model<Users>) { }
    
    // create async function to find all users
    async findAll(): Promise<Users[]> {
        return await this.userModel.find().exec();
    }
    // create async function to find a user by mongoose id
    async findOne(user:FindUserInput): Promise<Users> {
        return await this.userModel.findById(user.id).exec();
    }   
    // create async function to create a user
    async create(user: Users): Promise<Users> {
        return await new this.userModel(user).save();
    }
    // create async function to update a user
    async update( udUser: UpdateUserInput): Promise<Users> {
       const user  = await this.userModel.findOne(new Types.ObjectId(udUser.id));
         user.name = udUser.name;
         user.mail = udUser.mail;
         user.pass = udUser.pass;
         user.role = udUser.role;
         user.img  = udUser.img;
         return await user.save();
    }
    // create async function to delete a user
    async delete(id: string): Promise<Users> {
        return await this.userModel.findByIdAndDelete(id);
    }
   

}
