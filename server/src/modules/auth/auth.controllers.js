import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import constants from '../../config/constants';
import isValidMongoObjectID from '../../utils/mongoObjectIdValidation';
import { findUserById, insertUser, findUserByEmail } from '../user';

const createToken = info => jwt.sign(info, constants.jwt.secret);

export const me = async (userId, fields) => {
  const meSchema = Yup.object().shape({
    id: Yup.mixed().test('userId', 'userId is not ObjectID', value => isValidMongoObjectID(value)),
    fields: Yup.array().notRequired(),
  });

  await meSchema.validate({ id: userId, fields });

  const user = await findUserById(userId, fields);
  return user;
};

export const signup = async (args) => {
  const signupSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string().required(),
  });

  signupSchema.validateSync(args, {
    abortEarly: false,
  });

  const { _id: id } = await insertUser(args);
  return createToken({ id });
};

export const login = async (args) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string().required(),
  });

  await loginSchema.validate(args);
  const user = await findUserByEmail(args.email);
  const isValidPassword = user.comparePassword(args.password);

  if (!isValidPassword) {
    throw new Error('Password is not valid');
  }

  return createToken({ id: user._id }); // eslint-disable-line no-underscore-dangle
};
