import { FindPaymentByIdUseCase } from '@/contexts/payments/application/find-payment-by-id-use-case/find-payment-by-id-use-case';
import { Controller, Get, Param } from '@nestjs/common';
import { FindPaymentByIdHttpDto } from './find-payment-by-id.http-dto';
import { IPayment } from '@/contexts/payments/domain/payment';
import { PaymentNotFoundException } from '@/contexts/payments/domain/payment-not-found.exception';

@Controller('payments')
export class FindPaymentByIdController {
  constructor(
    private readonly findPaymentByIdUseCase: FindPaymentByIdUseCase,
  ) {}

  @Get(':id')
  async run(
    @Param('id') params: FindPaymentByIdHttpDto,
  ): Promise<{ payment: IPayment }> {
    try {
      return this.findPaymentByIdUseCase.execute({ id: params.id });
    } catch (error) {
      if (error instanceof PaymentNotFoundException) {
        throw new Error(error.message);
      }
      throw error;
    }
  }
}
