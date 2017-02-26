import Xray from 'x-ray';

const x = Xray();

const gamedesign = {};

gamedesign.get = (req, res) => {
  var stream = x('https://www.reddit.com/r/gamedesign/', '.title',
  [{
    title: '.title',
    href: 'a @href'
  }])(() => {
    console.log("Funcionando. game design!");
  })
  .stream();
  stream.pipe(res);
};

export default gamedesign;
