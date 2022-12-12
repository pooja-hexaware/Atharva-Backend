import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Toppings, ToppingsSchema } from 'src/toppings/toppings.model';
import { ToppingsModule } from 'src/toppings/toppings.module';
import { ToppingsService } from 'src/toppings/toppings.service';
import { MenuController } from './menu.controller';
import { Menu, MenuSchema } from './menu.model';
import { MenuService } from './menu.service';

@Module({
  imports:[MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }])],
  controllers: [MenuController],
  providers: [MenuService],
  exports:[MenuService]
})
export class MenuModule {}
