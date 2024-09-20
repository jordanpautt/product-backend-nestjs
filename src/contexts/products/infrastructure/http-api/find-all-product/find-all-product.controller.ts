import { FindAllProductUseCase } from '@/contexts/products/application/find-all-product-use-case/find-all-product-use-case';
import { IProduct } from '@/contexts/products/domain/product';
import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class FindAllProductController {
  constructor(private readonly findAllProductUseCase: FindAllProductUseCase) {}

  @Get()
  async run(): Promise<IProduct[]> {
    return this.findAllProductUseCase.execute();
  }
}
