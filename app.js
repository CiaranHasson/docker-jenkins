const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.');
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
