import { IPayment, Payment } from '@/contexts/payments/domain/payment';
import { PaymentRepository } from '@/contexts/payments/domain/payment.repository';
import { Injectable } from '@/contexts/shared/dependency-injection/injectable';

@Injectable()
export class InMemoryPaymentRepository implements PaymentRepository {
  private payments: IPayment[] = [];

  async save(payment: Payment): Promise<void> {
    this.payments.push(payment.toValue());
  }

  async findById(id: string): Promise<Payment | null> {
    const payment = this.payments.find(payment => payment.id === id);
    return payment ? new Payment(payment) : null;
  }
}
