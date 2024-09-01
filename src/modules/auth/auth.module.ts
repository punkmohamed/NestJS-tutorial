import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';

import { User, UserSchema } from 'src/core/schema/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService, JwtService]
})
export class AuthModule { }



