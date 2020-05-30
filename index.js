const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

const stupidRandomGenrator = function() {
  let sum = 0;
  for(let i = 0; i < 1000; i += 1 ) {
    sum += Math.floor((Math.random() * 1000) + 1);
  }
  return Math.ceil(sum/(Math.random() + 1))
}

app.get('/', function (req, res) {
  res.send('Hello, World!');
});

app.get('/compute', function (req, res) {
  res.json({
    random: stupidRandomGenrator(),
  });
});

app.listen(
  port,
  () => console.log(`Example app listening at port: ${port}`),
);
