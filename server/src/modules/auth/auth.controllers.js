import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import constants from '../../config/constants';
import { createUser, getUserByEmail } from '../user';

const createToken = info => jwt.sign(info, constants.jwt.secret);

export const signup = async (args) => {
  const { _id: id } = await createUser(args);
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
  const user = await getUserByEmail(args.email);
  const isValidPassword = user.comparePassword(args.password);

  if (!isValidPassword) {
    throw new Error('Password is not valid');
  }

  return createToken({ id: user._id }); // eslint-disable-line no-underscore-dangle
};