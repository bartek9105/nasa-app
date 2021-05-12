import { Document } from 'mongoose';

export interface RoverPhotos extends Document {
  photos: Photo[];
}

interface Photo {
  id: string;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}
