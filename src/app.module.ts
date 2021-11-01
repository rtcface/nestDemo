import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { GraphqlModule } from './modules/graphql/graphql.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  
  imports: [
    AuthModule,   
    UsersModule,   
    GraphqlModule,
    DatabaseModule,  
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
