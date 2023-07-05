import { Injectable } from "@nestjs/common";
import { UserEntity } from "../domain/user.entity";
import { CreateUserDTO } from "../dto/createUser.dto";
import { UserRepository } from "../repositories/user.repository";
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {

    constructor (private userRepository: UserRepository){}

    async createUser(user: CreateUserDTO) {

        const newUser = new UserEntity();
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.password = user.password;
        newUser.id = uuid();

        this.userRepository.createUser(newUser);

        return newUser;
    }
}