import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {
  @Get('/')
  getProducts(@Res() res) {
    return res.status(HttpStatus.OK).json({
      message: 'success'
    })
  }

  @Post('/create')
  createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    return createProductDTO
  }
}
