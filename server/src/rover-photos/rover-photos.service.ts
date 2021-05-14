import { RoverPhotosQueries } from './interfaces/rover-photos-queries.interface';
import { RoverPhotos } from './interfaces/rover-photos.interface';
import { Injectable, HttpService, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cron } from '@nestjs/schedule';
import { RoverPhotosResponse } from './interfaces/rover-photos-response.interface';

@Injectable()
export class RoverPhotosService {
  private readonly logger = new Logger(RoverPhotosService.name);

  constructor(
    private httpService: HttpService,
    @InjectModel('RoverPhotos')
    private readonly roverPhotosModel: Model<RoverPhotos>,
  ) {}

  @Cron('59 23 * * *')
  async fetchRoversPhotos(): Promise<RoverPhotos> {
    const currentDate = new Date().toISOString().split('T')[0];
    const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
    const rovers = ['curiosity', 'opportunity', 'spirit'];
    const urls = rovers.map(
      (rover) =>
        `${baseUrl}/${rover}/photos?earth_date=${currentDate}&api_key=${process.env.NASA_API_KEY}`,
    );
    const roverPhotosData = await Promise.all(
      urls.map((url) => this.httpService.get(url).toPromise()),
    );
    const photosArr = roverPhotosData.map((el) => el.data.photos);
    const roverPhotos = <RoverPhotos>{
      photos: [].concat(...photosArr),
    };

    this.saveRoversPhotos(roverPhotos);

    this.logger.log('Fetched and saved new data');
    return roverPhotos;
  }

  async saveRoversPhotos(roverPhotosDto: RoverPhotos): Promise<RoverPhotos> {
    const roversPhotos = new this.roverPhotosModel(roverPhotosDto);
    return await roversPhotos.save();
  }

  async getRoversPhotos({
    camera,
    rover,
    sortBy,
  }: RoverPhotosQueries): Promise<RoverPhotosResponse> {
    let sortQuery = 1;
    let sortQueryType;

    if (sortBy) {
      sortQueryType = sortBy.split(':')[1];
    }
    if (sortQueryType === 'asc') {
      sortQuery = 1;
    }
    if (sortQueryType === 'desc') {
      sortQuery = -1;
    }
    const query = [
      {
        $unwind: '$photos',
      },
      {
        $match: {
          'photos.camera.name': camera ? camera : { $exists: true },
          'photos.rover.name': rover ? rover : { $exists: true },
        },
      },
      {
        $group: { _id: '$_id', photos: { $push: '$photos' } },
      },
      {
        $sort: { 'photos.earth_date': sortQuery },
      },
    ];
    return this.roverPhotosModel.aggregate(query).exec();
  }
}
