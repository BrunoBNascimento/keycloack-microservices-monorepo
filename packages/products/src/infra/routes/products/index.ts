import { Application } from 'express';
import ProducController from '@/application/controllers/ProductController';

const productRoutes = () => {
  const { saveProduct, getProducts } = new ProducController();

  return {
    init(app: Application) {
      app.post('/', saveProduct);
      app.get('/', getProducts);
    },
  };
};

export default productRoutes;
