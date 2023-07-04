import { IsNotEmpty } from "class-validator";

export class ProductCharacteristicsDTO {

    @IsNotEmpty()
    name: string;

    description: string;
}