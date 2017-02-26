import Xray from 'x-ray';

const x = Xray();

const indiegaming = {};

indiegaming.get = (req, res) => {
  var stream = x('https://www.reddit.com/r/indiegaming/', '.title',
  [{
    title: '.title',
    href: 'a @href'
  }])(() => {
    console.log("Funcionando. indiegaming!");
  })
  .stream();
  stream.pipe(res);
};

export default indiegaming;
