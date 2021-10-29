import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users,UsersSchema } from './schemas/users.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name:Users.name , schema: UsersSchema }])],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
