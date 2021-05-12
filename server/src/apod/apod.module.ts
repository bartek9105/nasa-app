import { ApodService } from './apod.service';
import { ApodController } from './apod.controller';
import { ApodSchema } from './apod.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule, Module } from '@nestjs/common';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Apod', schema: ApodSchema }]),
  ],
  controllers: [ApodController],
  providers: [ApodService],
})
export class ApodModule {}
