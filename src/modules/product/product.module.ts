import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductRepository } from "./repositories/product.repository";
import { ProductService } from "./services/product.service";

@Module({
    controllers: [ProductController],
    providers: [ProductRepository, ProductService]
})
export class ProductModule {}