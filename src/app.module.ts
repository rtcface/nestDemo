import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  
  imports: [   
    UsersModule, 
    MongooseModule.forRoot('mongodb://localhost:27017'),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
