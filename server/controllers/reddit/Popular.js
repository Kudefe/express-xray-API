import Xray from 'x-ray';
const x = Xray();

const popular = {};

popular.get = (req, res) => {
  var stream = x('https://www.reddit.com/r/popular/new/', '.title',
[{
  title: '.title',
  href: 'a @href'
}])(() =>{
  console.log('funcionando bien!');
})
.stream();
stream.pipe(res);
}
export default popular;
