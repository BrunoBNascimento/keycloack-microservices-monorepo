import Product from '@/application/models/Product';
import ProductDTO from '../DTOs/ProductDTO';
import { IProduct } from '@/application/models/Product/interfaces/IProduct';
import { DocumentQuery } from 'mongoose';

export default class ProductService {
  saveProduct(product: ProductDTO): Promise<IProduct> {
    const productModel = new Product(product);

    return productModel.save();
  }

  getProducts(): DocumentQuery<IProduct[], IProduct, {}> {
    return Product.find({});
  }
}
