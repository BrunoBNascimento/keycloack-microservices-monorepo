import { Application } from 'express';
import CheckoutController from '@/application/controllers/CheckoutController';

const checkoutRoutes = () => {
  return {
    init(app: Application) {
      const { getSales, checkout } = new CheckoutController();

      app.get('/', getSales);
      app.post('/', checkout);
    },
  };
};

export default checkoutRoutes;
