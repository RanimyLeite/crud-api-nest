import { Injectable } from "@nestjs/common";
import { RegisterProductDTO } from "../dto/registerProduct.dto";

@Injectable()
export class ProductRepository {
    private products = [];

    async createProduct(product) {
        this.products.push(product);
    }

    async getProductsList() {
        return this.products;
    }
}