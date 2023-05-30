import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  create(data: Users) {
    return this.userRepository.save(data);
  }

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  findOne(username: string): Promise<Users | null> {
    return this.userRepository.findOne({ where: { username } });
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}

// import { Injectable } from '@nestjs/common';

// export type User = any;

// @Injectable()
// export class UsersService {
//   private readonly users: User[];

//   constructor() {
//     this.users = [
//       {
//         id: '1111',
//         username: 'john',
//         password: 'changeme',
//       },
//       {
//         id: '222222',
//         username: 'chris',
//         password: 'secret',
//       },
//       {
//         id: '33333',
//         username: 'maria',
//         password: 'guess',
//       },
//     ];
//   }

//   async findOne(username: string): Promise<User | undefined> {
//     return this.users.find((user) => user.username === username);
//   }
// }
