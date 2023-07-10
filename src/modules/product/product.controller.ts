import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ProductRepository } from "src/modules/product/repositories/product.repository";
import { RegisterProductDTO } from "./dto/registerProduct.dto";
import { ProductService } from "./services/product.service";

@Controller('/products')
export class ProductController {

    constructor (private productService: ProductService){}

    @Post()
    async registerProduct(@Body() product) {
        const registerProduct = this.productService.registerProduct(product);
        console.log('Produto registrado com sucesso!');
        return registerProduct;
    }

    @Get()
    async getProductsList() {
        const productList = await this.productService.getProductsList();
        return productList;
    }
}
