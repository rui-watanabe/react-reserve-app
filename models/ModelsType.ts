import mongoose from 'mongoose';

interface ModelResInterface {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserModelInterface {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'root';
}

export type UserModelType = UserModelInterface & mongoose.Document;
export type UserType = UserModelInterface & ModelResInterface;

export interface ProductModelInterface {
  name: string;
  price: number;
  sku: string;
  description: string;
  mediaUrl: string;
}

export type ProductModelType = ProductModelInterface & mongoose.Document;
export type ProductType = ProductModelInterface & ModelResInterface;

export interface CartModelInterface {
  user: string;
  products: [
    {
      quantity: number;
      product: string | ProductModelType;
    }
  ];
}

export type CartModelType = CartModelInterface & mongoose.Document;
export type CartType = CartModelInterface & ModelResInterface;

export interface OrderModelInterface {
  user: string;
  products: [
    {
      quantity: number;
      product: string | ProductModelType;
    }
  ];
  email: string;
  total: number;
}

export type OrderModelType = OrderModelInterface & mongoose.Document;
export type OrderType = OrderModelInterface & ModelResInterface;
