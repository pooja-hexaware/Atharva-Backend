import { Controller, Post, Get, Body, Param, Patch, Delete } from '@nestjs/common';
import { brotliDecompressSync } from 'zlib';
import { Store } from './store.model';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController 
{
    constructor(private readonly storeService:StoreService){}

    @Post()
    async create(@Body() storeDto: Store)
    {
        const res = this.storeService.create(storeDto);
        return res;
    }

    @Get()
    async findAll()
    {
        return this.storeService.findAll();
    }

    @Get('/:id')
   async findStoreMenu(@Param('id') id:any) {
    return this.storeService.findStoreMenu(id);    
   }

    @Patch('/:id')
    update(@Param('id') id: any, @Body() storeDto: Store) {
        return this.storeService.update(id, storeDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: any) {
        return this.storeService.delete(id);
    }
}
