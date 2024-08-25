import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAuthModule } from './user-auth/user-auth.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [UserAuthModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
