import { Injectable } from "@nestjs/common";
import { UserEntity } from "../domain/user.entity";
import { CreateUserDTO } from "../dto/createUser.dto";
import { UserRepository } from "../repositories/user.repository";
import { v4 as uuid } from 'uuid';
import { plainToClass } from "class-transformer";

@Injectable()
export class UserService {

    constructor (private userRepository: UserRepository){}

    async createUser(user: CreateUserDTO) {

        //Mapeando do DTO para userEntity
        const newUser: UserEntity = plainToClass(UserEntity, user);

        newUser.id = uuid();
        this.userRepository.createUser(newUser);

        return newUser;
    }

    async getUserList() {
        return this.userRepository.getUserList();
    }
}