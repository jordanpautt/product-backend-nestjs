import { Injectable } from '@/contexts/shared/dependency-injection/injectable';
import { PaymentRepository } from '../../domain/payment.repository';
import { IPayment } from '../../domain/payment';
import { PaymentNotFoundException } from '../../domain/payment-not-found.exception';
import { FindPaymentByIdDto } from './find-payment-by-id.dto';

@Injectable()
export class FindPaymentByIdUseCase {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(dto: FindPaymentByIdDto): Promise<{ payment: IPayment }> {
    const payment = await this.paymentRepository.findById(dto.id);

    if (!payment) {
      throw new PaymentNotFoundException(dto.id);
    }

    return { payment: payment.toValue() };
  }
}
