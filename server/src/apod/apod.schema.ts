import * as mongoose from 'mongoose';

export const ApodSchema = new mongoose.Schema({
  title: String,
  url: String,
  explanation: String,
  date: String,
  copyright: String,
});
