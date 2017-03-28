import mongoose from 'mongoose';

const Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

let Links = new Schema({
  href: String,
  title: String,
  image: String,
  excerpt: String,
  description: String,
  keywords: String,
  date: { type: Date, default: Date.now },
  fuente: String
});

const GdLinks = mongoose.model('GdLinks', Links);

export default GdLinks;
