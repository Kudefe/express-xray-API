import Xray from 'x-ray';

const x = Xray();

const emanuelfp = {};

emanuelfp.get = (req, res) => {
  var stream = x('http://www.emanueleferonato.com/', 'article',
[{
  title: 'h2.entry-title a',
  href: 'a @href',
  excerpt: 'div.triqui-entry-right div p'
}])(() => {
  console.log("funcionando Emanuel!");
})
.stream();
stream.pipe(res);
};

export default emanuelfp;
