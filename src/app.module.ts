import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { Order } from './models/order.model';
import { User } from './models/user.models';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User,Order])  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
