import { Apod } from './apod.interface';
import { Injectable, HttpService, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class ApodService {
  private readonly logger = new Logger(ApodService.name);

  constructor(
    private httpService: HttpService,
    @InjectModel('Apod') private readonly apodModel: Model<Apod>,
  ) {}

  @Cron('59 23 * * *')
  async fetchApod(): Promise<Apod> {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;
    const response = await this.httpService.get(apiUrl).toPromise();

    this.saveApod(response.data);
    this.logger.log('Fetched and saved new data');

    return response.data;
  }

  async saveApod(apodDto: Apod): Promise<Apod> {
    const newApod = new this.apodModel(apodDto);
    return await newApod.save();
  }

  async getApod(): Promise<Apod[]> {
    return await this.apodModel.find();
  }
}
