import { Controller, Get, Res, HttpStatus, Post, Body, Param, NotFoundException, Delete, Put, Query } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private productService: ProductService) {}

  @Get('/')
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts()
    return res.status(HttpStatus.OK).json({ ok: true, data: products })
  }

  @Get('/:id')
  async getProduct(@Res() res, @Param('id') id) {
    const product = await this.productService.getProduct(id)
    if (!product) throw new NotFoundException('Product does not exists');
    
    return res.status(HttpStatus.OK).json({ ok: true, data: product })
  }

  @Post('/create')
  async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const product = await this.productService.createProduct(createProductDTO)
    return res.status(HttpStatus.OK).json({ ok: true, data: product })
  }

  @Put('/edit')
  async editProduct(@Res() res, @Body() dto: CreateProductDTO, @Query('_id') id) {
    const updated = await this.productService.updateProduct(id, dto)
    return res.status(HttpStatus.OK).json({ ok: true, data: updated })
  }

  @Delete('/delete/:id')
  async deleteProduct(@Res() res, @Param('id') id) {
    const deleted = await this.productService.deleteProduct(id)
    return res.status(HttpStatus.OK).json({ ok: true, data: deleted })
  }
}
