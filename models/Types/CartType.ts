import mongoose from 'mongoose';
import { ModelIdInterface } from './CommonModelType';
import { ProductsInterface } from './ProductType';

export interface CartModelInterface extends ProductsInterface {
  user: string;
}

export type CartModelWithDocType = CartModelInterface & mongoose.Document;
export type CartModelType = CartModelInterface & ModelIdInterface;
