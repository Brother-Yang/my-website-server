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

  findOne(name: string): Promise<Users | null> {
    return this.userRepository.findOne({ where: { name } });
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
//         name: 'john',
//         password: 'changeme',
//       },
//       {
//         id: '222222',
//         name: 'chris',
//         password: 'secret',
//       },
//       {
//         id: '33333',
//         name: 'maria',
//         password: 'guess',
//       },
//     ];
//   }

//   async findOne(name: string): Promise<User | undefined> {
//     return this.users.find((user) => user.name === name);
//   }
// }
