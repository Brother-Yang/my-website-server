import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // @Post()
  // create(@Body() body: Users) {
  //   return this.userService.create(body);
  // }

  // @Get()
  // findAll(): Promise<Users[]> {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // details(@Param('id') id: number): Promise<Users | null> {
  //   return this.userService.findOne(id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.userService.remove(id);
  // }
}
