import { Application } from 'express';
import ProducController from '@/application/controllers/ProductController';

const productRoutes = () => {
  const { saveProduct } = new ProducController();

  return {
    init(app: Application) {
      app.post('/', saveProduct);
    },
  };
};

export default productRoutes;
