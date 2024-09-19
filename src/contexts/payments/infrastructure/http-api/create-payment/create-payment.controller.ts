import { CreatePaymentUseCase } from '@/contexts/payments/application/create-payment-user-case/create-payment-use-case';
import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentHttpDto } from './create-payment.http-dto';
import { IPayment } from '@/contexts/payments/domain/payment';

@Controller('payments')
export class CreatePaymentController {
  constructor(private readonly createPaymentUseCase: CreatePaymentUseCase) {}

  @Post()
  async run(
    @Body() createPaymentHttpDto: CreatePaymentHttpDto,
  ): Promise<{ payment: IPayment }> {
    return await this.createPaymentUseCase.execute({
      amount: createPaymentHttpDto.amount,
      customerId: createPaymentHttpDto.customerId,
    });
  }
}
