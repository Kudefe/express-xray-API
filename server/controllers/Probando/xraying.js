import Xray from 'x-ray';
import mongoose from 'mongoose';
import GdLinks from './../../db/models/links';

const x = Xray();

function probando() {

x('http://www.gamasutra.com/news/gd-mag/', 'body > div > div.span-20 > div.span-20.last.content_bg > div.span-16.last > div > div',
[{
  href: 'a @href',
  //author: 'strong',
  title: x('a @href', "meta[property='og:title']@content"),
  image: x('a @href', "meta[property='og:image']@content"),
  description: x('a @href', "meta[property='og:description']@content"),
  keywords: x('a @href', "meta[name='keywords']@content")

}])(function(err, data){
  if (err) {
    console.log(err);
  } else {

    for (let i = 0; i < data.length; i++) {
      (() => {

        GdLinks.find({href: data[i].href})
        .then(documents => {
          if (documents.length > 0) {
            console.log("este item ya existe!");
          } else {
            console.log('ahora si insertando en db!');
            let pruebando = new GdLinks({
              href: data[i].href,
              title: data[i].title,
              image: data[i].image,
              excerpt: "oops, esto hay que sacarlo",
              description: data[i].description,
              keywords: data[i].keywords,
              date: Date.now(),
              fuente: "Gamasutra"
            });
            pruebando.save((err, titulop) => {
              if(err)
              return console.error(err);
            });
          }
        })

      })();
    }

  }

});

}

const tiempo2 = setInterval(probando, 180000);

export default tiempo2;
