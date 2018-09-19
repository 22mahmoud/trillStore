import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import HTTPStatus from 'http-status';

import constants from '../../config/constants';
import { createUser, getUserByEmail, UserModel } from '../user';

const createToken = info => jwt.sign(info, constants.jwt.secret);
const decodeToken = token => jwt.verify(token, constants.jwt.secret);

export const authJWT = async (req, res, next) => {
  const bearerToken = req.headers && req.headers.authorization;

  if (!bearerToken) {
    return res.sendStatus(HTTPStatus.UNAUTHORIZED);
  }

  const [, token] = bearerToken.split(' ');

  const { id } = decodeToken(token);

  const user = await UserModel.findById(id);

  if (!user) {
    return res.sendStatus(HTTPStatus.UNAUTHORIZED);
  }

  req.user = user;
  return next();
};

export const signup = async (req, res, next) => {
  try {
    const { _id: id } = await createUser(req.body);
    return res.status(HTTPStatus.CREATED).json({
      token: createToken({ id }),
    });
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    return next(error);
  }
};

export const login = async (req, res, next) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string().required(),
  });
  try {
    await loginSchema.validate(req.body);
    const user = await getUserByEmail(req.body.email);
    const isValidPassword = user.comparePassword(req.body.password);

    if (!isValidPassword) {
      throw new Error('Password is not valid');
    }

    return res.status(HTTPStatus.OK).json({
      token: createToken({ id: user._id }), // eslint-disable-line no-underscore-dangle
    });
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    return next(error);
  }
};
