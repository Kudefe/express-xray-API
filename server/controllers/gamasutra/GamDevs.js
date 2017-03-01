import Xray from 'x-ray';
const x = Xray();

const gamdevs = {};

gamdevs.get = (req, res) => {
  var stream = x('http://www.gamasutra.com/topic/game-developer', 'body > div > div.span-20 > div.span-20.last.content_bg > div.span-16.last > div > div',
[{
  title: 'span.story_title a',
  href: 'a @href',
  author: 'strong',
  resumen: 'span' 

}])(() =>{
  console.log('funcionando! Dev Blogs Gamasutra!');
})
.stream();
stream.pipe(res);
}


export default gamdevs;
