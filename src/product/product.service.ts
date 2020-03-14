import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {

  }

  async getProducts(): Promise<Array<Product>> {
    return await this.productModel.find()
  }

  async getProduct(id: string): Promise<Product> {
    return await this.productModel.findById(id)
  }

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    return await this.productModel.create(createProductDTO)
  }

  async updateProduct(id: number, dto: CreateProductDTO): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, dto, {new: true})
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.productModel.findOneAndDelete({_id: id})
  }
}
