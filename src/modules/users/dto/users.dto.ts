// create dto for users from graphql whit Field and objectType


import { Field, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class UsersDto {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    mail: string;

    @Field()
    pass: string;

    @Field()
    img: string;

    @Field()
    role: string;

    @Field()
    isActive: boolean;

    @Field()
    createByGoogle: boolean;

    @Field()
    createdAt: Date;

    }






