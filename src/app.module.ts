import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'
import { MenuModule } from './menu/menu.module';
import { StoreModule } from './store/store.module';
import { ToppingsModule } from './toppings/toppings.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), 
  MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }), MenuModule, StoreModule, ToppingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
