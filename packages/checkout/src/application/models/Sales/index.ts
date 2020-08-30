import mongoose, { Schema } from 'mongoose';
import { ISales } from './interfaces/ISales';
import ProductSchema from './schemas/ProductSchema';

const { model } = mongoose;

const SalesSchema: Schema = new Schema(
  {
    products: [ProductSchema],
    creditCard: { type: String, required: true },
    status: {
      type: String,
      enum: ['APPROVED', 'REPROVED', 'PENDING'],
      required: true,
    },
  },
  { timestamps: true },
);

export default model<ISales>('Sales', SalesSchema);
