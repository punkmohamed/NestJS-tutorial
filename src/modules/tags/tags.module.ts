import { Module } from '@nestjs/common';
import { TagsController } from './tags/tags.controller';
import { TagsService } from './tags/tags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, TagSchema } from 'src/core/schema/tags.chema';
import { User, UserSchema } from 'src/core/schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }, { name: User.name, schema: UserSchema }])],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule { }
