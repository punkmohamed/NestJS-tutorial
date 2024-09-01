import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/users')
export class AuthController {
    constructor(private readonly _authService: AuthService) {

    }
    @Get()
    getAllEmails() {
        return this._authService.getEmails()
    }
    @Get('signin')
    signin(@Body() body: any) {
        return this._authService.signin(body)
    }
    @Post('signup')
    signup(@Body() body: any) {
        return this._authService.signup(body)
    }

}
