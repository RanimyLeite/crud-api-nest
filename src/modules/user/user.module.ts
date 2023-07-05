import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./repositories/user.repository";
import { EmailExistsValidator } from "./validators/email.validator";
import { UserService } from "./services/user.service";

@Module({
    controllers: [UserController],
    providers: [UserRepository, EmailExistsValidator, UserService]
})
export class UserModule {}