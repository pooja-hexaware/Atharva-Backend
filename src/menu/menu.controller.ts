import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ToppingsService } from 'src/toppings/toppings.service';
import { Menu } from './menu.model';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService:MenuService, 
        //private readonly toppingsService:ToppingsService
        ){}
    @Post()
    async create(@Body() menuDto:Menu)
    {
        const res = this.menuService.create(menuDto);
        return res;
    }

    @Get()
    async findAll()
    {
        return this.menuService.findAll();
    }

    @Get('/:id')
    async find(@Param('id') id:any)
    {
        return this.menuService.find(id);
    }

    @Patch('/:id')
    async update(@Param('id') id:any, @Body() menuDto:Menu)
    {
        return this.menuService.update(id, menuDto);
    }

    @Delete('/:id')
    async delete(@Param('id') id:any)
    {
        return this.menuService.delete(id);
    }
}
