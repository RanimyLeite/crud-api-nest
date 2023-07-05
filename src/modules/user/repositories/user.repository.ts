import { Injectable } from "@nestjs/common";
import { UserEntity } from "../domain/user.entity";

@Injectable()
export class UserRepository {

    private users: UserEntity[] = [];

    async createUser(user: UserEntity) {
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