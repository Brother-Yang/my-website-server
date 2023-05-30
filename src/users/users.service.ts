import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Users } from './users.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(Users) private userRepository: Repository<Users>,
//   ) {}

//   create(data: Users) {
//     return this.userRepository.save(data);
//   }

//   findAll(): Promise<Users[]> {
//     return this.userRepository.find();
//   }

//   findOne(id: number): Promise<Users | null> {
//     return this.userRepository.findOne({ where: { id } });
//   }

//   remove(id: number) {
//     return this.userRepository.delete(id);
//   }
// }
