import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { timeStamp } from 'console';
import { Toppings } from './toppings.model';
import { ToppingsService } from './toppings.service';

@Controller('toppings')
export class ToppingsController 
{
    constructor(private readonly toppingsService:ToppingsService){}

    @Post()
    async create(@Body()toppingsDto:Toppings)
    {
        const res = this.toppingsService.create(toppingsDto);
        return res;
    }

    @Get()
    async findAll()
    {
        return this.toppingsService.findAll();
    }

    @Get('/:id')
    async find(@Param('id')id:any)
    {
        return this.toppingsService.find(id);
    }

    @Patch('/:id')
    async update(@Param('id') id:any, @Body() toppingsDto:Toppings)
    {
        return this.toppingsService.update(id, toppingsDto);
    }

    @Delete('/:id')
    async delete(@Param('id') id:any)
    {
        return this.toppingsService.delete(id);
    }
}
