import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Toppings, toppingsDocument } from './toppings.model';

@Injectable()
export class ToppingsService 
{
    constructor(
        @InjectModel(Toppings.name)
        private readonly toppingsModel: Model<toppingsDocument>){}

    async create(topppingsDto):Promise<Toppings>
    {
        return new this.toppingsModel(topppingsDto).save();
    }

    async findAll():Promise<Toppings[]>
    {
        return this.toppingsModel.find({}).exec();
    }

    async find(id:any):Promise<Toppings>
    {
        const filter = {_id:id}
        return this.toppingsModel.findOne(filter);
    }

    async update(id:any, topppingsDto:Toppings):Promise<Toppings>
    {
        const filter = {_id:id}
        return this.toppingsModel.findByIdAndUpdate(id, topppingsDto);
    }

    async delete(id:any):Promise<Toppings>
    {
        const filter = {_id:id}
        return this.toppingsModel.findByIdAndDelete(filter);
    }
}
