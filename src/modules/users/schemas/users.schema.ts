import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Users & Document;

@Schema()
export class Users {

  @Prop({ required: [true,'Name is necessary'] })
  name: string;

  @Prop( { required: [true,'Email is necessary'], unique: true })
  mail: string;

  @Prop( { required: [true,'The password is necessary']})
  pass: string;

  @Prop()
  img: string;

  @Prop( { required:[true,'The role is necessary'], enum: ['ADMIN_ROLE','USER_ROLE'], default: 'USER_ROLE' })
  role:string;

  @Prop( { default: true })
  isActive: boolean;

  @Prop( { default: false })
  createByGoogle: boolean;

  @Prop( { default: Date.now() })
  createdAt: Date;
 

}

export const UsersSchema = SchemaFactory.createForClass(Users);