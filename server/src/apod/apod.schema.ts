import * as mongoose from 'mongoose';

export const ApodSchema = new mongoose.Schema({
  title: String,
  url: String,
  explaination: String,
  date: String,
  copyright: String,
});
