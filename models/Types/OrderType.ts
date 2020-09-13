import mongoose from 'mongoose';
import { ModelResInterface } from './CommonModelType';
import { ProductsInterface } from './ProductType';

export interface OrderModelInterface extends ProductsInterface {
  user: string;
  email: string;
  total: number;
}

export type OrderModelWithDocType = OrderModelInterface & mongoose.Document;
export type OrderModelType = OrderModelInterface & ModelResInterface;
