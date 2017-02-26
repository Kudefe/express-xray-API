import Xray from 'x-ray';

const x = Xray();

const devblogs = {};

devblogs.get = (req, res) => {
  var stream = x('https://www.reddit.com/r/devblogs/', '.title',
  [{
    title: '.title',
    href: 'a @href'
  }])(() => {
    console.log("Funcionando. Dev Blogs!");
  })
  .stream();
  stream.pipe(res);
};

export default devblogs;
