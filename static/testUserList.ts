import { ObjectId } from 'mongodb';
import { UserModelType } from '../models/Types/UserType';

export const testUserList: UserModelType[] = [
  {
    _id: new ObjectId('000000000000000000000001'),
    createdAt: new Date('2020-9-22'),
    updatedAt: new Date('2020-9-22'),
    name: 'test',
    email: 'test@gmail.com',
    password: '11111111',
    role: 'root',
  },
  {
    _id: new ObjectId('000000000000000000000002'),
    createdAt: new Date('2020-9-22'),
    updatedAt: new Date('2020-9-22'),
    name: 'test2',
    email: 'test2@gmail.com',
    password: '22222222',
    role: 'admin',
  },
  {
    _id: new ObjectId('000000000000000000000003'),
    createdAt: new Date('2020-9-22'),
    updatedAt: new Date('2020-9-22'),
    name: 'test',
    email: 'test@gmail.com',
    password: '33333333',
    role: 'user',
  },
];
