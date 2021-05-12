import * as mongoose from 'mongoose';

export const PerservanceWeatherSchema = new mongoose.Schema({
  terrestrial_date: String,
  sol: String,
  ls: String,
  season: String,
  min_temp: Number,
  max_temp: Number,
  pressure: Number,
  sunrise: String,
  sunset: String,
});
