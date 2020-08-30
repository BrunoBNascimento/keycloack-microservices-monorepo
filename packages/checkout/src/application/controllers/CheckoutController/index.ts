import { Request } from 'express';
import CheckoutService from '@/application/services/CheckoutService';
import CustomResponse from '@/infra/middleware/interfaces/CustomResponse';
import Validation from '@/application/decorators/Validation';
import CheckoutSchema from './validations/CheckoutSchema';

export default class CheckoutController {
  async getSales(req: Request, res: CustomResponse): Promise<void> {
    const checkoutService = new CheckoutService();
    const sales = await checkoutService.getSales();

    res.send(sales);
  }

  @Validation(CheckoutSchema)
  async checkout(req: Request, res: CustomResponse): Promise<void> {
    const checkoutService = new CheckoutService();
    const checkout = checkoutService.checkout(req.body);

    res.send(checkout);
  }
}
