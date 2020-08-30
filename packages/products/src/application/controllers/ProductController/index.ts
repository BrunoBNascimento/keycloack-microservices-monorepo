import { Request, Response } from 'express';
import Validation from '@/application/decorators/Validation';
import SaveProductSchema from '@/application/controllers/ProductController/validations/SaveProduct';
import ProductService from '@/application/services/ProductService';

export default class ProductController {
  @Validation(SaveProductSchema)
  async saveProduct(req: Request, res: Response) {
    const { body } = req;

    const { saveProduct } = new ProductService();
    const product = await saveProduct(body);
    res.send(product);
  }
}
