import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostsService, PostsRo } from './posts.service';

@Controller('post')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() post) {
    return await this.postsService.create(post);
  }

  @Get()
  async findAll(@Query() query): Promise<PostsRo> {
    return await this.postsService.findAll(query);
  }

  @Get(':id')
  async findById(@Param('id') id) {
    return await this.postsService.findById(id);
  }

  @Put(':id')
  async updateById(@Param('id') id, @Body() post) {
    return this.postsService.updateById(id, post);
  }

  @Delete(':id')
  async deleteById(@Param('id') id) {
    return await this.postsService.remove(id);
  }
}
