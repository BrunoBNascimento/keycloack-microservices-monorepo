import { Document } from 'mongoose';
import { IProduct } from './IProduct';

export enum statuses {
  APPROVED = 'APPROVED',
  REPROVED = 'REPROVED',
  PENDING = 'PENDING',
}

export interface ISales extends Document {
  products: Array<Pick<IProduct, 'name' | 'price'>>;
  status: statuses;
  price: number;
}
