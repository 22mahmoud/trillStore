import { Router } from 'express';
import HTTPStatus from 'http-status';

import { authJWT } from '../../services/auth/authJWT';
import catchException from '../../middlewares/catchException';
import * as authControllers from './auth.controllers';

const routes = Router();

routes.get(
  '/me',
  authJWT,
  catchException(async (req, res) => {
    const { _id: id } = req.user;

    let { fields } = req.query;
    fields = fields ? fields.split(',') : [];

    const me = await authControllers.me(id, fields);
    res.status(HTTPStatus.OK).json(me);
  }),
);

routes.post(
  '/signup',
  catchException(async (req, res) => {
    const token = await authControllers.signup(req.body);
    return res.status(HTTPStatus.CREATED).json({
      token,
    });
  }),
);

routes.post(
  '/login',
  catchException(async (req, res) => {
    const token = await authControllers.login(req.body);
    return res.status(HTTPStatus.OK).json({
      token,
    });
  }),
);

export default routes;
