import Product from '@/application/models/Product';
import ProductDTO from '../DTOs/ProductDTO';

export default class ProductService {
  saveProduct(product: ProductDTO) {
    const productModel = new Product(product);

    return productModel.save();
  }
}
