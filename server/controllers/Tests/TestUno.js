//timed function que inserte un objeto en la DB luego de comprobar que no existe
//setInterval para ejecutar la funcion una y otra vez
import mongoose from 'mongoose';
import GdLinks from './../../db/models/links'

function insertData(){

  GdLinks.find({title: "TotiloPrueba" })
  .then(documents => {
    if(documents.length > 0){
      console.log('esto ya existe en DB!');
    }else {
      console.log("no existe: insertando!");

      var titulop = new GdLinks({
        href: "String",
        title: "TotiloPrueba",
        image: "String",
        excerpt: "String",
        description: "String",
        keywords: "String",
        date: Date.now(),
        fuente: "String"
      });

      titulop.save((err, titulop) => {
        if(err)
        return console.error(err);
      });

    }
  })




    //
    // titulop.save(function(err, titulop){
    //   if(err) return console.error(err);

// }
// );
  }



const tiempo = setInterval(insertData, 60000);

export default tiempo;
