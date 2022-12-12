import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Menu, menuDocument } from 'src/menu/menu.model';

export type storeDocument = Store & Document;

//const  mongoose = require("mongoose");
const  MongooseSchema = mongoose.Schema;

@Schema()
export class Store {
   
   @Prop({type: MongooseSchema.Types.ObjectId})
   id : any 
   
   @Prop()
   name: string; 
   
   @Prop()
   address : string;

   @Prop()
   pin_code : number;

   @Prop()
   store_contact : string;

   @Prop()
   kitchen_contact : string;

   @Prop({type:[{type:MongooseSchema.Types.ObjectId, ref:Menu.name}]})
   menu:mongoose.Types.ObjectId[];
   
   
}

export const StoreSchema = SchemaFactory.createForClass(Store);