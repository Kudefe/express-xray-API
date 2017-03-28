import Xray from 'x-ray';
const x = Xray();

const gamdevs = {};

gamdevs.get = (req, res) => {
  var stream = x('http://www.gamasutra.com/news/gd-mag/', 'body > div > div.span-20 > div.span-20.last.content_bg > div.span-16.last > div > div',
[{
  href: 'a @href',
  //author: 'strong',
  title: x('a @href', "meta[property='og:title']@content"),
  image: x('a @href', "meta[property='og:image']@content"),
  description: x('a @href', "meta[property='og:description']@content"),
  keywords: x('a @href', "meta[name='keywords']@content")

}])((err, data) =>{
if (err) {
  console.log("error!!");
} else {
  console.log("funcionando bien!");
  //json en lugar de la funcion pipe de xray, porque resulta en error

  return res.status(200).json(data);
}
});
}


export default gamdevs;
