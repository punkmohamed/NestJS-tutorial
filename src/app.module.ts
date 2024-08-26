import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { AuthModule } from './modules/auth/auth.module';
import { TagsModule } from './modules/tags/tags.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ArticleModule, AuthModule, TagsModule, MongooseModule.forRoot('mongodb://localhost:27017/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
