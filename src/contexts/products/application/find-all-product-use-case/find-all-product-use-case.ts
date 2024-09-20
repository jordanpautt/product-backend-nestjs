import { Injectable } from '@/contexts/shared/dependency-injection/injectable';
import { ProductRepository } from '@/contexts/products/domain/product.repository';
import { IProduct } from '@/contexts/products/domain/product';

@Injectable()
export class FindAllProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<IProduct[]> {
    const products = await this.productRepository.findAll();
    return products.map(product => product.toValue());
  }
}
