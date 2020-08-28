const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('goodnight moon');
});

app.listen(3000, () => {
  console.log('the moon is going to sleep...');
})
