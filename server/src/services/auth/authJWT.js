import jwt from 'jsonwebtoken';
import HTTPStatus from 'http-status';

import constants from '../../config/constants';
import { UserModel } from '../../modules/user';

const decodeToken = token => jwt.verify(token, constants.jwt.secret);

export const authJWT = async (req, res, next) => {
  try {
    const bearerToken = req.headers && req.headers.authorization;

    if (!bearerToken) {
      return res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }

    const [, token] = bearerToken.split(' ');

    if (!token) {
      return res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }

    const { id } = decodeToken(token);

    const user = await UserModel.findById(id);

    if (!user) {
      return res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }

    req.user = user;
    return next();
  } catch (error) {
    return res.sendStatus(HTTPStatus.UNAUTHORIZED);
  }
};
