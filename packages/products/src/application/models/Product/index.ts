import mongoose, { Schema } from 'mongoose';
import { IProduct } from './interfaces/IProduct';

const { model } = mongoose;

const ProductSchema: Schema = new Schema(
  {
    age: { type: String, required: true },
  },
  { timestamps: true },
);

export default model<IProduct>('Product', ProductSchema);
