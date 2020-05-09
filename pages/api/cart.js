import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Cart from '../../models/Cart';
import connectDB from '../../models/Cart';

connectDB();

export default async (req, res) => {
  if(!("authorization" in req.headers)){
    return res.status(401).send("No authorization token");
  }
  try{
    const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
    const cart = await Cart.findOne({ user: userId }).populate({
      //find product information from unique product id
      path: "products.product",
      model: "Product"
    });
    res.status(200).json(cart.products);
  }catch(errors){
    console.errors(errors);
    res.status(403).send("Please login again")
  }
}