import mongoose from 'mongoose';

import constants from './constants';

const {
  db: {
    port, debug, host, name,
  },
} = constants;

const MONGO_URI = `mongodb://${host}:${port}/${name}`;

if (debug) {
  mongoose.set('debug', true);
}

mongoose.set('useCreateIndex', true);

mongoose.connect(MONGO_URI);

mongoose.connection
  .on('error', error => console.error(error))
  .on('close', () => console.log('Database connection closed.'))
  .once('open', () => console.log('Database is Running 🤘 👌'));
