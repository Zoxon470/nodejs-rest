import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes/index.js';

const app = express();

mongoose.connect('mongodb://mongo:27017');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(400).send(`Error: ${res.originUrl} not found.`);
  next();
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(400).send(`Error ${err}`);
  next();
});

routes(app);

export default app;
