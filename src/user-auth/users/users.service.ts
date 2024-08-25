import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    emails = [
        {
            email: "mohamed@gmail.com",
            password: "123123",
            name: "tag1",
            id: "1"
        },
        {
            email: "mohamed2@gmail.com",
            password: "123123",
            name: "tag2",
            id: "2"
        },
        {
            email: "mohamed3@gmail.com",
            password: "123123",
            name: "tag3",
            id: "3"
        },
    ]
    getEmails() {
        return this.emails
    }
    signup(body) {
        const email = this.emails.find((email) => email.email === body.email)
        if (email) {
            return { message: "email already exist" }
        } else {
            this.emails.push(body)
            return { message: "added", emails: this.emails }
        }
    }
    signin(body) {
        const email = this.emails.find((email) => email.email === body.email)
        const password = this.emails.find((email) => email.password === body.password)
        if (email && password) {
            return { message: "you have signin successfully", email: email }
        } else {
            return { message: "invalid email or password" }
        }
    }


}

