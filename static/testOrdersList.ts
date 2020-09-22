import { ObjectId, ObjectID } from 'mongodb';
import { OrderModelType } from '../models/Types/OrderType';
import { testProductList } from './testProductList';
import { testUserList } from './testUserList';

export const testOrdersList: OrderModelType[] = [
  {
    _id: new ObjectId('200000000000000000000001'),
    createdAt: new Date(2020, 4, 1, 12, 30, 45),
    updatedAt: new Date(2020, 4, 1, 12, 30, 45),
    products: [
      {
        _id: new ObjectID('100000000000000000000001'),
        quantity: 1,
        product: testProductList[0],
      },
      {
        _id: new ObjectID('100000000000000000000002'),
        quantity: 2,
        product: testProductList[1],
      },
    ],
    user: testUserList[2]._id, // 'user' role user
    email: testUserList[2].email,
    total: testProductList[0].price + testProductList[1].price * 2,
  },
  {
    _id: new ObjectID('200000000000000000000002'),
    createdAt: new Date(2020, 4, 1, 12, 30, 45),
    updatedAt: new Date(2020, 4, 1, 12, 30, 45),
    products: [
      {
        _id: new ObjectID('100000000000000000000003'),
        quantity: 1,
        product: testProductList[2],
      },
      {
        _id: new ObjectID('100000000000000000000004'),
        quantity: 2,
        product: testProductList[3],
      },
    ],
    user: testUserList[2]._id, // 'user' role user
    email: testUserList[2].email,
    total: testProductList[2].price + testProductList[3].price * 2,
  },
  {
    _id: new ObjectID('200000000000000000000003'),
    createdAt: new Date(2020, 4, 1, 12, 30, 45),
    updatedAt: new Date(2020, 4, 1, 12, 30, 45),
    products: [
      {
        _id: new ObjectID('100000000000000000000005'),
        quantity: 1,
        product: testProductList[4],
      },
      {
        _id: new ObjectID('100000000000000000000006'),
        quantity: 2,
        product: testProductList[5],
      },
    ],
    user: testUserList[2]._id, // 'user' role user
    email: testUserList[2].email,
    total: testProductList[4].price + testProductList[5].price * 2,
  },
];
