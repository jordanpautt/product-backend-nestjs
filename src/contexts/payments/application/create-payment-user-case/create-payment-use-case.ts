import { Injectable } from '@/contexts/shared/dependency-injection/injectable';
import { IPayment, Payment } from '@/contexts/payments/domain/payment';
import { PaymentRepository } from '@/contexts/payments/domain/payment.repository';
import { CreatePaymentDto } from './create-payment.dto';

@Injectable()
export class CreatePaymentUseCase {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(dto: CreatePaymentDto): Promise<{ payment: IPayment }> {
    const payment = Payment.create(dto);
    await this.paymentRepository.save(payment);

    return { payment: payment.toValue() };
  }
}
