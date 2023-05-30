import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(name);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return { ...result, b: 1 };
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, id: user.id };
    return {
      code: 200,
      access_token: this.jwtService.sign(payload),
    };
  }
}
