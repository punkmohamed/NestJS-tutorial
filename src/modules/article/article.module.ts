import { Module } from '@nestjs/common';
import { ArticleService } from './article/article.service';
import { ArticleController } from './article/article.controller';
import { Article, ArticleSchema } from 'src/core/schema/articale.schema';
import { Tag, TagSchema } from 'src/core/schema/tags.chema';
import { User, UserSchema } from 'src/core/schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [MulterModule.register({
    dest: "./upload"
  }), MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }, { name: Tag.name, schema: TagSchema }, { name: User.name, schema: UserSchema }])],
  providers: [ArticleService],
  controllers: [ArticleController]
})
export class ArticleModule { }
