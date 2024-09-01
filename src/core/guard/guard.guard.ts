import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GuardGuard implements CanActivate {
  constructor(private _jwtService: JwtService) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = request.headers
    if (!token) {
      throw new HttpException('Token is missing', HttpStatus.UNAUTHORIZED)
    }

    const tooken = token.token
    try {
      let decoded = this._jwtService.verify(tooken, { secret: "test" })
      request['userId'] = decoded.id
      console.log(decoded)
      return true
    } catch (error) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED)
    }
  }
}
