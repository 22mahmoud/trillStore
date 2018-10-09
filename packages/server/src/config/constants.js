import * as Yup from 'yup';

require('dotenv').config();

const envSchema = Yup.object()
  .shape({
    NODE_ENV: Yup.string()
      .oneOf(['development', 'test', 'production'])
      .default('development'),
    PORT: Yup.number().default(8888),
    MONGO_HOST: Yup.string()
      .required()
      .default('localhost'),
    MONGO_PORT: Yup.string().default(27017),
    MONGO_NAME: Yup.when('NODE_ENV', {
      is: Yup.string().matches('test'),
      then: 'TrillStoreTest',
      otherwise: Yup.string().required(),
    }),
    MONGO_DEBUG: Yup.boolean().when('NODE_ENV', {
      is: Yup.string().matches('development'),
      then: Yup.boolean().default(true),
      otherwise: Yup.boolean().default(false),
    }),
    PAYPAL_CLIENT_ID: Yup.string().required(),
    PAYPAL_CLIENT_SECRET: Yup.string().required(),
    JWT_SECRET: Yup.string().required(),
  })
  .noUnknown(false)
  .required();

let res;
try {
  res = envSchema.validateSync(process.env);
} catch (error) {
  throw error;
}

const config = {
  env: res.NODE_ENV,
  port: res.PORT,
  db: {
    debug: res.MONGO_DEBUG,
    host: res.MONGO_HOST,
    port: res.MONGO_PORT,
    name: res.MONGO_NAME,
  },
  paypal: {
    clientId: res.PAYPAL_CLIENT_ID,
    secret: res.PAYPAL_CLIENT_SECRET,
  },
  jwt: {
    secret: res.JWT_SECRET,
  },
};

export default config;
