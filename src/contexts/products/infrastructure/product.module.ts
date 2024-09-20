import { Module } from '@nestjs/common';
import { FindAllProductController } from './http-api/find-all-product/find-all-product.controller';
import { PostgresProductRepository } from './http-api/adapters/postgres-product-repository';
import { ProductRepository } from '../domain/product.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { PrismaService } from 'src/database/prisma.service';
import { FindAllProductUseCase } from '../application/find-all-product-use-case/find-all-product-use-case';

@Module({
  imports: [PrismaModule],
  controllers: [FindAllProductController],
  providers: [
    FindAllProductUseCase,
    PrismaService,
    PostgresProductRepository,
    {
      provide: ProductRepository,
      useClass: PostgresProductRepository,
    },
  ],
  exports: [FindAllProductUseCase],
})
export class ProductModule {}
