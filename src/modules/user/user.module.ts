import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./repositories/user.repository";
import { EmailExistsValidator } from "./validators/email.validator";

@Module({
    controllers: [UserController],
    providers: [UserRepository, EmailExistsValidator]
})
export class UserModule {}