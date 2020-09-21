import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import { ModelIdInterface } from './CommonModelType';

export interface ProductModelInterface {
  name: string;
  price: number;
  sku: string;
  description: string;
  mediaUrl: string;
}

export type ProductModelWithDocType = ProductModelInterface & mongoose.Document;
export type ProductModelType = ProductModelInterface & ModelIdInterface;

export interface ProductInterface extends ModelIdInterface {
  quantity: number;
  product: ObjectId | ProductModelType;
}

export interface ProductsInterface {
  products: ProductInterface[];
}
