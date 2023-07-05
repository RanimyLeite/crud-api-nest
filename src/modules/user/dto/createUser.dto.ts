import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailExistent } from "../validators/email.validator";

export class CreateUserDTO {

    @IsNotEmpty({ message: 'O nome nao pode ser vazio.' })
    @MinLength(3)
    name: string;

    @IsEmail(undefined, { message: 'O email informado é inválido.' })
    @EmailExistent({ message: 'Já existe um usuário com o email informado.' })
    email: string;

    @MinLength(6, { message: 'A senha precisa ter no minimo 6 caracteres.' })
    password: string;
}