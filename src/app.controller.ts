import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 1. 固定路径：

  // 可以匹配到 get请求，http://localhost:3000/app/list
  @Get('list')
  getHello(): string {
    return this.appService.getHello();
  }

  // 可以匹配到 post请求，http://localhost:3000/app/list
  @Post('list')
  create(): string {
    return this.appService.getHello();
  }

  @Get('use_*')
  getUser(): string {
    return 'getUser';
  }

  @Put('list/user')
  updateUser() {
    return 'update user success!';
  }

  @Put('list/:id')
  update() {
    return 'update success!';
  }
}
