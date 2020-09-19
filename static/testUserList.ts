import { UserModelType } from '../models/Types/UserType';

export const testUserList: UserModelType[] = [
  // testUser is 1xxxxxxxxx group
  {
    _id: '20000000001',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'test',
    email: 'test@gmail.com',
    password: '11111111',
    role: 'root',
  },
  {
    // testUser is 1xxxxxxxxx group
    _id: '20000000002',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'test2',
    email: 'test2@gmail.com',
    password: '22222222',
    role: 'admin',
  },
  {
    // testUser is 1xxxxxxxxx group
    _id: '20000000003',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'test',
    email: 'test@gmail.com',
    password: '33333333',
    role: 'user',
  },
];
