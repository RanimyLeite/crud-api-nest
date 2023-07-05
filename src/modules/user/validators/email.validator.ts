import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "src/modules/user/repositories/user.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailExistsValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository) {}
    
    async validate(email: any): Promise<boolean> {
        const verifyEmailExists = await this.userRepository.existsEmail(email);
        return !verifyEmailExists;
    }
}

//creating the validator decorator
export const EmailExistent = (validationOptions: ValidationOptions) => {
    return (object: Object, props: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: props,
            options: validationOptions,
            constraints: [],
            validator: EmailExistsValidator
        });
    }
}