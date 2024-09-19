import { Module } from '@nestjs/common';
import { CreatePaymentUseCase } from '../application/create-payment-user-case/create-payment-use-case';
import { InMemoryPaymentRepository } from './http-api/repositories/in-memory.payment-repository';
import { PaymentRepository } from '../domain/payment.repository';
import { CreatePaymentController } from './http-api/create-payment/create-payment.controller';
import { FindPaymentByIdController } from './http-api/find-payment-by-id/find-payment-by-id.controller';
import { FindPaymentByIdUseCase } from '../application/find-payment-by-id-use-case/find-payment-by-id-use-case';

@Module({
  controllers: [CreatePaymentController, FindPaymentByIdController],
  providers: [
    CreatePaymentUseCase,
    FindPaymentByIdUseCase,
    InMemoryPaymentRepository,
    {
      provide: PaymentRepository,
      useClass: InMemoryPaymentRepository,
    },
  ],
  exports: [CreatePaymentUseCase, FindPaymentByIdUseCase],
})
export class PaymentModule {}
