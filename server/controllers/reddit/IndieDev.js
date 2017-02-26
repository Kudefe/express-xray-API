import Xray from 'x-ray';

const x = Xray();

const indiedev = {};

indiedev.get = (req, res) => {
  var stream = x('https://www.reddit.com/r/indiedev/', '.title',
  [{
    title: '.title',
    href: 'a @href'
  }])(() => {
    console.log("Funcionando. Indie Dev!");
  })
  .stream();
  stream.pipe(res);
};

export default indiedev;
