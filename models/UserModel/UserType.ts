import mongoose from 'mongoose';
import { ModelResInterface } from '../CommonModelType';

export interface UserModelInterface {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'root';
}

export type UserModelWithDocType = UserModelInterface & mongoose.Document;
export type UserModelType = UserModelInterface & ModelResInterface;
