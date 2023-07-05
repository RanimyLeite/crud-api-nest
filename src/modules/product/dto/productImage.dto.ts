import { IsString } from "class-validator";

export class ProductImageDTO {

    @IsString()
    url: string;

    description: string;
}