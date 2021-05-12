import { Document } from 'mongoose';

export interface Apod extends Document {
  title: string;
  url: string;
  explaination: string;
  date: string;
  copyright: string;
}
