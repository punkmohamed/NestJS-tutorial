import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schema/user.schema';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModal: Model<User>, private _jwtService: JwtService) {

    }

    getEmails() {
        const emails = this.userModal.find()
        throw new HttpException({ message: "succesfull ", emails }, HttpStatus.ACCEPTED)
    }

    async signup(body) {
        const user = await this.userModal.findOne({ email: body.email })
        body.password = await bcrypt.hash(body.password, 8)
        if (user) {
            throw new HttpException("email already register make new one", HttpStatus.FORBIDDEN)
        } else {
            const newUser = await this.userModal.insertMany(body)
            throw new HttpException({ message: "you created new email", newUser }, HttpStatus.CREATED)
        }
    }
    async signin(body) {
        const user = await this.userModal.findOne({ email: body.email })
        let matchPassword = await bcrypt.compare(body.password, user.password)
        if (user && matchPassword) {
            let token = this._jwtService.sign({ name: user.name, email: user.email }, { secret: "test" })
            throw new HttpException({ message: "you have signin successfully", token }, HttpStatus.ACCEPTED)
        } else {
            throw new HttpException("invalid email or password ", HttpStatus.FORBIDDEN)
        }
    }
}
