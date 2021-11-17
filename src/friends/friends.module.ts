import { Module } from '@nestjs/common';
import { FriendsController } from './friends.controller';
import { FriendsService } from './friends.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Friend } from './friends.model';

@Module({
  controllers: [FriendsController],
  providers: [FriendsService],
  imports: [SequelizeModule.forFeature([Friend])],
})
export class FriendsModule {}
