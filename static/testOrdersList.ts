import { ObjectID } from 'mongodb';
import { OrderModelType } from '../models/Types/OrderType';
import { testProductList } from './testProductList';
import { testUserList } from './testUserList';

export const testOrdersList: OrderModelType[] = [
  {
    _id: new ObjectID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    products: [
      {
        _id: new ObjectID(),
        quantity: 1,
        product: testProductList[0],
      },
      {
        _id: new ObjectID(),
        quantity: 2,
        product: testProductList[1],
      },
    ],
    user: testUserList[2]._id, // 'user' role user
    email: testUserList[2].email,
    total: testProductList[0].price + testProductList[1].price * 2,
  },
  {
    _id: new ObjectID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    products: [
      {
        _id: new ObjectID(),
        quantity: 1,
        product: testProductList[2],
      },
      {
        _id: new ObjectID(),
        quantity: 2,
        product: testProductList[3],
      },
    ],
    user: testUserList[2]._id, // 'user' role user
    email: testUserList[2].email,
    total: testProductList[2].price + testProductList[3].price * 2,
  },
  {
    _id: new ObjectID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    products: [
      {
        _id: new ObjectID(),
        quantity: 1,
        product: testProductList[4],
      },
      {
        _id: new ObjectID(),
        quantity: 2,
        product: testProductList[5],
      },
    ],
    user: testUserList[2]._id, // 'user' role user
    email: testUserList[2].email,
    total: testProductList[4].price + testProductList[5].price * 2,
  },
];
