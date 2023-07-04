import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {

    private users = [];

    async createUser(user) {
        this.users.push(user);
        console.log(this.users);
    }

    async getUserList() {
        return this.users;
    }

    async existsEmail (email: string) {
        const existsUser = this.users.find(
            user => user.email === email
        )

        return existsUser !== undefined;
    }
}