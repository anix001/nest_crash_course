import { CreateUserType } from './../../../utils/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'anix', email: 'anix@gmail.com' },
    { username: 'nonis', email: 'nou@gmail.com' },
    { username: 'bnjdvjkb', email: 'fdbvjk@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserById(id: number) {
    return { id, username: 'anix', email: 'anix@gmail.com' };
  }
}
