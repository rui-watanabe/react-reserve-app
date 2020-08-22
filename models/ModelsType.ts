import mongoose from 'mongoose';

export interface CartModelInterface {
  user: string;
  products: [
    {
      quantity: number;
      product: string;
    }
  ];
}

export interface OrderModelInterface {
  user: string;
  products: [
    {
      quantity: number;
      product: string;
    }
  ];
  email: string;
  total: number;
}

export interface ProductModelInterface {
  name: string;
  price: number;
  sku: string;
  description: string;
  mediaUrl: string;
}

export interface UserModelInterface {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'root';
}

export type CartModelType = CartModelInterface & mongoose.Document;

export type OrderModelType = OrderModelInterface & mongoose.Document;

export type ProductModelType = ProductModelInterface & mongoose.Document;

export type UserModelType = UserModelInterface & mongoose.Document;
