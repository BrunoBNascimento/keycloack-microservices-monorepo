import { Application } from 'express';
import productRoutes from '@/infra/routes/products';

const routes = () => {
  return {
    init(app: Application) {
      console.log('Initializing express rest routes');
      const product = productRoutes();

      product.init(app);
    },
  };
};

export default routes;
