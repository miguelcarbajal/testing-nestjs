import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  imageURL: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});
