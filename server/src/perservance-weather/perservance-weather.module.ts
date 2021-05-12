import { PerservanceWeatherService } from './perservance-weather.service';
import { PerservanceWeatherController } from './perservance-weather.controller';
import { PerservanceWeatherSchema } from './perservance-weather.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, HttpModule } from '@nestjs/common';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: 'PerservanceWeather', schema: PerservanceWeatherSchema },
    ]),
  ],
  controllers: [PerservanceWeatherController],
  providers: [PerservanceWeatherService],
})
export class PerservanceWeatherModule {}
