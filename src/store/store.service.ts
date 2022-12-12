import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, menuDocument } from 'src/menu/menu.model';
import { MenuService } from 'src/menu/menu.service';
import { Store, storeDocument } from './store.model';
// import { MenuService } from 'src/menu/menu.service';

@Injectable()
export class StoreService {
    constructor(
        @InjectModel(Store.name)
        private readonly storeModel : Model<storeDocument>
        ){}
    async findStoreMenu(id: any):Promise<Menu[]> {
        const filter = {_id:id};
        return this.storeModel.find(filter).populate('menu');
    }
    async delete(id: any):Promise<Store> {
        const filter = { _id:id};
        return this.storeModel.findOneAndDelete(filter);
    }
    async update(id: any, storeDto: Store):Promise<Store> {
        const filter = { _id:id};
        return this.storeModel.findOneAndUpdate(filter, storeDto);
    }
    async findAll():Promise<Store[]> {
        return this.storeModel.find({}).populate('menu');
    }
    async create(storeDto: Store):Promise<Store> {
        return new this.storeModel(storeDto).save();
    }
}
