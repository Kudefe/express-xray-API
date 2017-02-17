import express from 'express'

console.log(process.env.SECRET_MESSAGE);
console.log(process.env.TOKEN);

const app = express();

app.listen(3000, () => {
  console.log('runnijng on port 3000....');
});
