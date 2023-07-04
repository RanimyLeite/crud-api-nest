import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./repositories/user.repository";
import { EmailExists } from "./validators/email.validator";

@Module({
    controllers: [UserController],
    providers: [UserRepository, EmailExists]
})
export class UserModule {}