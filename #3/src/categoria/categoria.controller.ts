import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from 'src/database/models/Categoria';
import { Repository } from 'typeorm';

@Controller('Categoria')
export class CategoriaController {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>,
  ) {}

  @Post()
  async store(@Body() body: Categoria): Promise<Categoria> {
    try {
      const categoria = this.categoriaRepo.create(body);
      this.categoriaRepo.save(categoria);
      return categoria;
    } catch (error) {
      return error;
    }
  }

  @Get()
  async index(): Promise<Categoria[]> {
    try {
      const categorias = this.categoriaRepo.find();
      return categorias;
    } catch (error) {
      return error;
    }
  }
}
