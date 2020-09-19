import { ObjectId } from 'mongodb';

export interface ModelIdInterface {
  _id: ObjectId;
}

export interface ModelTimeInterface extends ModelIdInterface {
  createdAt: Date;
  updatedAt: Date;
}
