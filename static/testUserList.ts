import { ObjectId, ObjectID } from 'mongodb';
import { UserModelType } from '../models/Types/UserType';

export const testUserList: UserModelType[] = [
  {
    _id: new ObjectId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'test',
    email: 'test@gmail.com',
    password: '11111111',
    role: 'root',
  },
  {
    _id: new ObjectId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'test2',
    email: 'test2@gmail.com',
    password: '22222222',
    role: 'admin',
  },
  {
    _id: new ObjectId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'test',
    email: 'test@gmail.com',
    password: '33333333',
    role: 'user',
  },
];
