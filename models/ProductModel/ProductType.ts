import mongoose from 'mongoose';
import { ModelResInterface } from '../CommonModelType';

export interface ProductInterface extends ModelResInterface {
  quantity: number;
  product: string | ProductModelType;
}

export interface ProductsInterface {
  products: ProductInterface[];
}

export interface ProductModelInterface {
  name: string;
  price: number;
  sku: string;
  description: string;
  mediaUrl: string;
}

export type ProductModelWithDocType = ProductModelInterface & mongoose.Document;
export type ProductModelType = ProductModelInterface & ModelResInterface;
