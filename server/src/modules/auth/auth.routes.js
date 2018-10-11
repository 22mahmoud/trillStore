import { Router } from 'express';
import HTTPStatus from 'http-status';

import catchException from '../../middlewares/catchException';
import * as authControllers from './auth.controllers';

const routes = Router();

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
