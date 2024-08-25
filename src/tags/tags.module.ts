import { Module } from '@nestjs/common';
import { TagsController } from './tags/tags.controller';
import { TagsService } from './tags/tags.service';

@Module({
  imports: [],
  providers: [TagsService],
  controllers: [TagsController]
})
export class TagsModule { }
