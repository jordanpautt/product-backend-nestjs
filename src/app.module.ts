import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaModule } from '@/database/prisma.module';
import { PaymentModule } from '@/contexts/payments/infrastructure/payment.module';
import { ProductModule } from '@/contexts/products/infrastructure/product.module';
import { ResponseInterceptor } from '@/contexts/shared/middleware/response.interceptor';

@Module({
  imports: [PaymentModule, ProductModule, PrismaModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
