import mongoose from 'mongoose';
import { ModelResInterface } from '../CommonModelType';

export interface ProductModelInterface {
  name: string;
  price: number;
  sku: string;
  description: string;
  mediaUrl: string;
}

export type ProductModelWithDocType = ProductModelInterface & mongoose.Document;
export type ProductModelType = ProductModelInterface & ModelResInterface;

export interface ProductInterface extends ModelResInterface {
  quantity: number;
  product: mongoose.Types.ObjectIdConstructor | ProductModelType;
}

export interface ProductsInterface {
  products: ProductInterface[];
}
