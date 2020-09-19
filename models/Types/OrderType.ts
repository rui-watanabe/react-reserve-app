import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import { ModelTimeInterface } from './CommonModelType';
import { ProductsInterface } from './ProductType';

export interface OrderModelInterface extends ProductsInterface {
  user: ObjectId;
  email: string;
  total: number;
}

export type OrderModelWithDocType = OrderModelInterface & mongoose.Document;
export type OrderModelType = OrderModelInterface & ModelTimeInterface;
