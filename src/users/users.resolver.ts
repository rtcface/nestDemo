import { Query,Mutation,Resolver,Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';
import { UpdateUserInput, CreateUserInput } from './inputs/users.input';
import { Users } from './schemas/users.schema';


@Resolver()
export class UsersResolver {
    constructor( private readonly usersService: UsersService ) {}
    
    // create Querys, Mutations, Subscriptions

    // create Query for find all users
    @Query(() => [UsersDto])
    async users() {
        return await this.usersService.findAll();
    }
    // create Mutations
    @Mutation(() => UsersDto)
    async createUser(@Args('data') data: CreateUserInput) {
        return await this.usersService.create(data);
    }

    // Query for find one user
      //  @Query(() => UsersDto)
        //async user(@Args('id') id: string) {
          //  return await this.usersService.findOne(id);
        //}

    // Mutations for update user
    @Mutation(() => UsersDto)
    async updateUser(@Args('id') id: string, @Args('data') data: UpdateUserInput) {
        return await this.usersService.update( data);
    }


    // Mutations for delete user
    @Mutation(() => Boolean)
    async deleteUser(@Args('id') id: string) {
        return await this.usersService.delete(id);
    }

  
}
