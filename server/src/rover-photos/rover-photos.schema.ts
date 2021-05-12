import { RoverPhotos } from './rover-photos.interface';
import * as mongoose from 'mongoose';

export const RoverPhotosSchema = new mongoose.Schema<RoverPhotos>({
  photos: [
    {
      id: Number,
      sol: Number,
      camera: {
        id: Number,
        name: String,
        rover_id: Number,
        full_name: String,
      },
      img_src: String,
      earth_date: String,
      rover: {
        id: Number,
        name: String,
        landing_date: String,
        launch_date: String,
        status: String,
      },
    },
  ],
});
