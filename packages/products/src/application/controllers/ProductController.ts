import { Request, Response } from 'express';
import Validation from '@/application/decorators/Validation';
import ProductSchema from '@/application/validation/ProductsSchema';

export default class ProductController {
  @Validation(ProductSchema)
  async saveProduct(req: Request, res: Response) {
    res.send({});
  }
}
