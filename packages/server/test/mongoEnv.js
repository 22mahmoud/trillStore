import mongoose from 'mongoose';

const mongooseOptions = {
  autoIndex: false,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  connectTimeoutMS: 10000,
};

export const initDB = async () => {
  const mongoUri = 'mongodb://localhost:27017/trill-test';
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(
        mongoUri,
        mongooseOptions,
      );
    }
  } catch (error) {
    mongoose.createConnection(mongoUri, mongooseOptions);
  }
};

export const closeDB = () => {
  mongoose.disconnect();
};

export const resetDB = async () => {
  await mongoose.connection.dropDatabase();
};
