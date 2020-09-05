import mongoose from 'mongoose';
import { ModelResInterface } from '../CommonModelType';
import { ProductsInterface } from '../ProductModel/ProductType';

export interface CartModelInterface extends ProductsInterface {
  user: string;
}

export type CartModelWithDocType = CartModelInterface & mongoose.Document;
export type CartModelType = CartModelInterface & ModelResInterface;
