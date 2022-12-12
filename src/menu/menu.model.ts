import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { Store } from 'src/store/store.model';
import { Toppings, toppingsDocument, ToppingsSchema } from 'src/toppings/toppings.model';

export type menuDocument = Menu & Document;

//const  mongoose = require("mongoose");
const  MongooseSchema = mongoose.Schema;

@Schema()
export class Menu {
   
   @Prop({type: MongooseSchema.Types.ObjectId})
   id : any;

   @Prop()
   name : string;

   @Prop()
   description : string;

   @Prop()
   price : number;

   @Prop({
      type: [{ type: MongooseSchema.Types.ObjectId, ref: Toppings.name }],
    })
    toppings: mongoose.Types.ObjectId[];
}

export const MenuSchema = SchemaFactory.createForClass(Menu);