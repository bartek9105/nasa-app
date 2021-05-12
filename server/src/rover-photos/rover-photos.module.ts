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
  controllers: [],
  providers: [],
})
export class RoverPhotosModule {}
