import express from 'express';

import config from './config';

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url, req.body||'');
  next();
});

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', {
    initialMarkup: 'Hello'
  });
});

app.use(express.static('public'));
const listener = app.listen(config.port, () => {
  console.log('App is listening on port', listener.address().port, '...');
});
