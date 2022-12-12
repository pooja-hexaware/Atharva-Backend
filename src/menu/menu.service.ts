import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Toppings, toppingsDocument } from 'src/toppings/toppings.model';
import { Menu, menuDocument } from './menu.model';

@Injectable()
export class MenuService {    
    constructor(@InjectModel(Menu.name) 
    private readonly menuModel:Model<menuDocument>,
    )
    {}
    // private static readonly menuModel:Model<menuDocument>
    
    async delete(id: any): Promise<Menu>{
        const filter = {_id:id}
        return this.menuModel.findByIdAndDelete(filter);
    }
    
    async find(id: any):Promise<Menu> {
        const filter = {_id:id};
        return await this.menuModel.findOne(filter).populate('toppings');
    }
    
    async findAll():Promise<Menu[]> {
        return await this.menuModel.find({}).populate('toppings');
    }
    
    async findMenuToppings(id:any):Promise<Toppings[]>
    {
        const filter = {_id:id};
        return this.menuModel.find(filter);
    }
    
    async update(id: any, menuDto: Menu):Promise<Menu> {
        const filter = {_id:id};
        return this.menuModel.findOneAndUpdate(filter, menuDto);
    }
    
    async create(menuDto: Menu):Promise<Menu> {
        return new this.menuModel(menuDto).save();
    }
}
