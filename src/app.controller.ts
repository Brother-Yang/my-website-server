import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello() {
    return '';
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
