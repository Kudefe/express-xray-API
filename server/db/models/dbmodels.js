import mongoose from 'mongoose'

import GdLinks from './links';

const  conectado = mongoose.connect('mongodb://localhost:27017/data/', (err, db) => {
  if(!err){
    console.log('estamos conectados mierda!');
  }
});


export default conectado;
