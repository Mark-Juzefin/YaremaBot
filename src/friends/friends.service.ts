import { Injectable } from '@nestjs/common';
import { Friend } from './friends.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFriendDto } from './dto/create-friend.dto';

@Injectable()
export class FriendsService {
  constructor(@InjectModel(Friend) private friendRepository: typeof Friend) {}

  async createFriend(dto: CreateFriendDto) {
    return await this.friendRepository.create(dto);
  }

  async getAllFriends() {
    return await this.friendRepository.findAll();
  }
}
