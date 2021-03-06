import mongoose from 'mongoose';
import { CartModelWithDocType } from '../Types/CartType';

const { ObjectId, Number } = mongoose.Schema.Types;

const CartSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
  },
  products: [
    {
      quantity: {
        type: Number,
        default: 1,
      },
      product: {
        type: ObjectId,
        ref: 'Product',
      },
    },
  ],
});

export default mongoose.models.Cart ||
  mongoose.model<CartModelWithDocType>('Cart', CartSchema);
