import { PerservanceWeatherModule } from './perservance-weather/perservance-weather.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_CONNECTION),
    ScheduleModule.forRoot(),
    PerservanceWeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
