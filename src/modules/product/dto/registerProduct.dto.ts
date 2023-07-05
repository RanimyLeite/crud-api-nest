import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength, ValidateNested, isNumber } from "class-validator";
import { ProductCharacteristicsDTO } from "./productCharacteristics.dto";
import { ProductImageDTO } from "./productImage.dto";
import { Type } from "class-transformer";

export class RegisterProductDTO {

    @IsNotEmpty({ message: 'O nome do produto nao pode ser vazio.' })
    @MinLength(3, { message: 'O nome do produto deve ter no minimo 3 caracteres.' })
    name: string;

    @IsNotEmpty()
    @IsPositive()
    price: number;

    @IsNotEmpty()
    @IsPositive()
    stockQuantity: number;

    @MaxLength(300)
    description: string;

    @ValidateNested()
    @IsArray()
    @Type(() => ProductCharacteristicsDTO)
    characteristics: ProductCharacteristicsDTO[];

    @ValidateNested()
    @IsArray()
    @MinLength(1)
    @Type(() => ProductImageDTO)
    images: ProductImageDTO[];

    @IsNotEmpty()
    category: string;

    createDate: Date;

    updatedDate: Date;
}