import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Store } from 'src/store/store.model';

export type toppingsDocument = Toppings & Document;

const  mongoose = require("mongoose");
const  MongooseSchema = mongoose.Schema;

@Schema()
export class Toppings {
   
   @Prop({type: MongooseSchema.Types.ObjectId})
   id : any 
   
   @Prop()
   name: string; 
   
   @Prop()
   price : number;

}

export const ToppingsSchema = SchemaFactory.createForClass(Toppings);