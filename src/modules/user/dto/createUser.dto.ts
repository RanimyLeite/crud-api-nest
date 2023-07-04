import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDTO {

    @IsNotEmpty({ message: 'O nome nao pode ser vazio.' })
    @MinLength(3)
    name: string;

    @IsEmail(undefined, { message: 'O email informado é inválido.' })
    email: string;

    @MinLength(6, { message: 'A senha precisa ter no minimo 6 caracteres.' })
    password: string;
}