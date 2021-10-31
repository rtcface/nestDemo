// create here the inputs for the users


import { Field, InputType } from '@nestjs/graphql';

//this is the input for create a user
@InputType()
export class CreateUserInput {
    @Field()
    readonly name: string;

    @Field()
    readonly mail: string;

    @Field()
    readonly pass: string;

    @Field()
    readonly img: string;

    @Field()
    readonly role: string;

}

// generate input for uodate a user
@InputType()
export class UpdateUserInput {
    
    @Field()
    readonly id: string;

    @Field()
    readonly name: string;

    @Field()
    readonly mail: string;

    @Field()
    readonly pass: string;

    @Field()
    readonly img: string;

    @Field()
    readonly role: string;

}

// generate input for find a user
@InputType()
export class FindUserInput {
    @Field()
    readonly id: string;
  
}

