import Xray from 'x-ray';

const x = Xray();

const gdtag = {};

gdtag.get = (req, res) => {
  let stream = x('https://medium.com/tag/game-development/latest', 'div.js-homepage.u-backgroundGrayLightest > div > div > div.col.u-size8of12.u-sm-size12of12 > div > div > div > div > div > div:nth-child(2)',
  [{
    link: 'a @href',
    title: x('a @href', "meta[property='og:title']@content"),
    image: x('a @href', "meta[property='og:image']@content"),
    description: x('a @href', "meta[property='og:description']@content"),

  }])((err, data) =>{
  if (err) {
    console.log("error!!");
  } else {
    console.log("funcionando bien!");
    //json en lugar de la funcion pipe de xray, porque resulta en error

    return res.status(200).json(data);
  }
  });
  };

export default gdtag;
