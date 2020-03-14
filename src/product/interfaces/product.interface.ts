import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly desc: string;
  readonly imageURL: string;
  readonly price: number;
  readonly createdAt: Date;
}
