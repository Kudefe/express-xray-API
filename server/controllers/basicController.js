import Xray from 'x-ray';

var x = Xray();

const basicController = {};

basicController.get = (req, res) => {
  var stream = x('http://google.com', 'title').stream();
  stream.pipe(res);
};

export default basicController;
