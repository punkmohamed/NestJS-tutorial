import { Module } from '@nestjs/common';
import { ArticleService } from './article/article.service';
import { ArticleController } from './article/article.controller';
import { Article, ArticleSchema } from 'src/core/schema/articale.schema';
import { Tag, TagSchema } from 'src/core/schema/tags.chema';
import { User, UserSchema } from 'src/core/schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { extname } from 'path';
import * as multer from 'multer';
import { JwtService } from '@nestjs/jwt';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
  },
});
@Module({
  imports: [MulterModule.register({
    storage
  }), MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }, { name: Tag.name, schema: TagSchema }, { name: User.name, schema: UserSchema }])],
  providers: [ArticleService, JwtService],
  controllers: [ArticleController]
})
export class ArticleModule { }
