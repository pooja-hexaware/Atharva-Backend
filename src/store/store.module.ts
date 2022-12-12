import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from 'src/menu/menu.module';
import { MenuService } from 'src/menu/menu.service';
import { StoreController } from './store.controller';
import { Store, StoreSchema } from './store.model';
import { StoreService } from './store.service';

@Module({
  imports:[MongooseModule.forFeature([{name:Store.name, schema:StoreSchema}])],
  controllers: [StoreController],
  providers: [StoreService],
  exports:[StoreService]
})
export class StoreModule {}
