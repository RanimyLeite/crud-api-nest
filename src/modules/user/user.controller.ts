import { Controller, Post, Get, Body } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { CreateUserDTO } from "./dto/createUser.dto";

@Controller('/users')
export class UserController {

    constructor (private userRepository: UserRepository){}
    
    @Post()
    async createUser (@Body() user: CreateUserDTO) {
        this.userRepository.createUser(user);
        return user;
    }

    @Get()
    async getUserList() {
       return this.userRepository.getUserList();
    }
}