import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [GraphQLModule.forRoot({
        autoSchemaFile: true,
      }),],
    controllers: [],
    providers: [],
    exports: [GraphqlModule],
    })

export class GraphqlModule {
    
}
