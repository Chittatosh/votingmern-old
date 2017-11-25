import express from 'express';

import config from '../config';

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url, req.body||'');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World\n');
});

const listener = app.listen(config.port, () => {
  console.log('App is listening on port', listener.address().port, '...');
});
