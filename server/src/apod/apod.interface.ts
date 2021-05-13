import { Document } from 'mongoose';

export interface Apod extends Document {
  title: string;
  url: string;
  explanation: string;
  date: string;
  copyright: string;
}
