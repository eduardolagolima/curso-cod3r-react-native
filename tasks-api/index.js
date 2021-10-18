const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Teste');
});

app.listen(3000, () => {
  console.log('Api iniciada');
});
