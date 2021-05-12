import { RoverPhotosService } from './rover-photos.service';
import { RoverPhotosController } from './rover-photos.controller';
import { RoverPhotosSchema } from './rover-photos.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, HttpModule } from '@nestjs/common';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      {
        name: 'RoverPhotos',
        schema: RoverPhotosSchema,
      },
    ]),
  ],
  controllers: [RoverPhotosController],
  providers: [RoverPhotosService],
})
export class RoverPhotosModule {}
