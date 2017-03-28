import mongoose from 'mongoose';
import GdLinks from './../../db/models/links';

const probando = {};

probando.get = (req, res) => {
  GdLinks.find({fuente: "Gamasutra"})
  .then(documents => {
    return res.status(200).json(documents)
  });
}

export default probando;
