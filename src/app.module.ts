import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { BotService } from './bot/bot.service';
import { FriendsModule } from './friends/friends.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123654',
      database: 'Yarema-bot',
      models: [],
    }),
    FriendsModule,
  ],
  controllers: [AppController],
  providers: [AppService, BotService],
})
export class AppModule {}
