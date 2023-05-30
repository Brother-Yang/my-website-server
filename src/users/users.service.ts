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
