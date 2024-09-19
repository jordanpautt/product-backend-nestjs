import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePaymentHttpDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  customerId: string;
}
