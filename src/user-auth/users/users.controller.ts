
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('/users')
export class UsersController {
    constructor(private readonly _usersService: UsersService) {

    }
    @Get()
    getAllEmails() {
        return this._usersService.getEmails()
    }
    @Get('signin')
    signin(@Body() body: any) {
        return this._usersService.signin(body)
    }
    @Post('signup')
    signup(@Body() body: any) {
        return this._usersService.signup(body)
    }

}
