import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((product) => product.id === id);
  }

  create(productDto: CreateProductsDto) {
    this.products.push({
      ...productDto,
      id: Date.now().toString(),
    });
  }
}
