import { plainToClass } from "class-transformer";
import { ProductEntity } from "../domain/product.entity";
import { RegisterProductDTO } from "../dto/registerProduct.dto";
import { ProductRepository } from "../repositories/product.repository";
import { Injectable } from "@nestjs/common";
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductService {

    constructor(private productRepository: ProductRepository){}

    async registerProduct(product: RegisterProductDTO) {
        //Mapeando do DTO para userEntity
        const newProduct: ProductEntity = plainToClass(ProductEntity, product);
        newProduct.id = uuid();
        newProduct.createDate = new Date();
        newProduct.updatedDate = new Date();

        this.productRepository.createProduct(newProduct);

        return newProduct;
    }

    async getProductsList(){
        return this.productRepository.getProductsList()
    }
}
