import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFriendDto } from './dto/create-friend.dto';
import { FriendsService } from './friends.service';

@Controller('friends')
export class FriendsController {
  constructor(private friendsService: FriendsService) {}
  @Post()
  create(@Body() friendDTO: CreateFriendDto) {
    return this.friendsService.createFriend(friendDTO);
  }

  @Get()
  getAll() {
    return this.friendsService.getAllFriends();
  }
}
