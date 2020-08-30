import mongoose, { Schema } from 'mongoose';
import { ISales } from './interfaces/ISales';

const { model } = mongoose;

const SalesSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);

export default model<ISales>('Sales', SalesSchema);
