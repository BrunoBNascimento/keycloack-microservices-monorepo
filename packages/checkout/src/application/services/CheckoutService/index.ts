import Sales from '@/application/models/Sales';
import { ISales, statuses } from '@/application/models/Sales/interfaces/ISales';

export default class CheckoutService {
  async getSales(): Promise<ISales[]> {
    return Sales.find({});
  }

  async checkout(checkoutData: ISales): Promise<ISales> {
    const created = await Sales.create({
      ...checkoutData,
      status: statuses.APPROVED,
    });

    return created;
  }
}
