import { Document } from 'mongoose';

export interface ISales extends Document {
  product: string;
  price: number;
}
