import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});