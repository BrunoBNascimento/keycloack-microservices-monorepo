import { Request, Response } from 'express';
import Validation from '@/application/decorators/Validation';
import SaveProductSchema from '@/application/controllers/ProductController/validations/SaveProduct';
import ProductService from '@/application/services/ProductService';

export default class ProductController {
  @Validation(SaveProductSchema)
  async saveProduct(req: Request, res: Response) {
    const { body } = req;
    const productService = new ProductService();

    const product = await productService.saveProduct(body);
    res.send(product);
  }

  async getProducts(req: Request, res: Response) {
    const productService = new ProductService();
    const product = await productService.getProducts();

    res.send(product);
  }
}
