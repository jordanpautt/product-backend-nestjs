import { IProduct, Product } from '@/contexts/products/domain/product';
import { ProductRepository } from '@/contexts/products/domain/product.repository';
import { Injectable } from '@/contexts/shared/dependency-injection/injectable';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PostgresProductRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    const products =
      (await this.prisma.product.findMany()) as unknown as IProduct[];
    return products.map(Product.fromPrisma);
  }
}
