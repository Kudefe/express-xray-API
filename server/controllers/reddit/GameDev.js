import Xray from 'x-ray';

const x = Xray();

const gamedev = {};

gamedev.get = (req, res) => {
  var stream = x('http://reddit.com/r/gamedev/', '.title',
[{
  title: '.title',
  href: 'a @href'
}])(() => {
  console.log("hoka");
})
.stream();
stream.pipe(res);
};

export default gamedev;
