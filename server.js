'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: './public/'});
});

app.listen(PORT, () => console.log(`Welcome to port:${PORT}. Enjoy the storm.`));
