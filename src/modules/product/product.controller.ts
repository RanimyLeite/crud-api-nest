import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ProductRepository } from "src/modules/product/repositories/product.repository";
import { RegisterProductDTO } from "./dto/registerProduct.dto";

@Controller('/products')
export class ProductController {

    constructor (private productRepository: ProductRepository){}

    @Post()
    async registerProduct(@Body() product: RegisterProductDTO[]) {
        this.productRepository.createProduct(product);
        console.log(product);
        console.log('Produto registrado com sucesso!');
        return product;
    }

    @Get()
    async getProductsList() {
        return this.productRepository.getProductsList();
    }
}
