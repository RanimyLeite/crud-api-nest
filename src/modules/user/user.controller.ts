import { Controller, Post, Get, Body } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserService } from "./services/user.service";

@Controller('/users')
export class UserController {

    constructor (private userService: UserService){}

    @Post()
    async createUser (@Body() user: CreateUserDTO) {
        const createUser = await this.userService.createUser(user);
        return { id: createUser.id, message: 'Usuário criado com sucesso!' };
    }

    @Get()
    async getUserList() {
       return this.userService.getUserList();
    }
}