import { Application } from 'express';
import checkoutRoutes from '@/infra/routes/checkout';

const routes = () => {
  return {
    init(app: Application) {
      console.log('Initializing express rest routes');
      const checkout = checkoutRoutes();

      checkout.init(app);
    },
  };
};

export default routes;
