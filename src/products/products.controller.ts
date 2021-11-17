import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  // @Redirect('https://google.com', 301)
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductsDto: CreateProductsDto) {
    return this.productsService.create(createProductsDto);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return 'Remove ' + id;
  }

  @Put(':id')
  update(@Body() updateProductDTO: UpdateProductDto, @Param('id') id: string) {
    return 'Update ' + id;
  }
}
