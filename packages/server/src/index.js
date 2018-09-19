import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import express from 'express';

import './config/db';
import constants from './config/constants';
import ApiRoutes from './modules/routes';

const IS_DEV = constants.env !== 'production';

const app = express();

if (IS_DEV) {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', ApiRoutes);

app.get('/', (_, res) => res.send('Hello API'));
app.get('*', (_, res) => res.sendStatus(404));

app.listen(constants.port, error => console.log(error || `Server is running on http://localhost:${constants.port} 🚀`));
