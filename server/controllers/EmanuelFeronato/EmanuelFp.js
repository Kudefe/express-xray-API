import Xray from 'x-ray';

const x = Xray();

const emanuelfp = {};

emanuelfp.get = (req, res) => {
  var stream = x('http://www.emanueleferonato.com/', 'article',
[{
  href: 'a @href',
  title: x('a @href', "meta[property='og:title']@content"),
  image: x('a @href', "meta[property='og:image']@content"),
  excerpt: 'div.triqui-entry-right div p',
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
};

export default emanuelfp;
