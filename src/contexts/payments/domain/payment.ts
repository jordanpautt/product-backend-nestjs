export interface IPayment {
  id: string;
  amount: number;
  customerId: string;
}
export class Payment {
  constructor(private attributes: IPayment) {}

  static create(createPayment: { amount: number; customerId: string }) {
    return new Payment({
      id: '1',
      amount: createPayment.amount,
      customerId: createPayment.customerId,
    });
  }

  toValue(): IPayment {
    return {
      id: this.attributes.id,
      amount: this.attributes.amount,
      customerId: this.attributes.customerId,
    };
  }
}
