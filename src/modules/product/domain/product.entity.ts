
export class ProductEntity {
    id: string;
    name: string;
    price: number;
    stockQuantity: number;
    description: string;
    characteristics: ProductCharacteristicsEntity[];
    images: ProductImageEntity;
    category: string;
    createDate: Date;
    updatedDate: Date;
}

export class ProductCharacteristicsEntity {
    name: string;
    description: string;
}

export class ProductImageEntity {
    url: string;
    description: string;
}