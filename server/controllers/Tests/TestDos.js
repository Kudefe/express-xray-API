//Aqui tengo que poner la funcon get de los test.
import mongoose from 'mongoose';
import GdLinks from './../../db/models/links';


const test = {};

test.get = (req, res) => {
  GdLinks.find({title:"TotiloPrueba"})
  .then(documents => {
    return res.status(200).json(documents)
  });
}

export default test;
