import { Product } from './product';

export abstract class ProductRepository {
  abstract findAll(): Promise<Product[]>;
}
