import { Router } from 'express';
import HTTPStatus from 'http-status';

import catchException from '../../middlewares/catchException';
import * as ProductController from './product.controllers';
import { authJWT } from '../../services/auth/authJWT';
import { sellerRole } from '../../services/auth/role';

const routes = Router();

routes.get(
  '/',
  catchException(async (req, res) => {
    let { offset = 0, limit = 10, fields } = req.query;

    offset = parseInt(offset, 10);
    limit = Math.min(parseInt(limit, 10), 50);
    fields = fields ? fields.split(',') : [];

    const products = await ProductController.getAllProducts(offset, limit, fields);

    res.status(HTTPStatus.OK).json(products);
  }),
);

routes.get(
  '/:id',
  catchException(async (req, res) => {
    const { id } = req.params;
    let { fields } = req.query;

    fields = fields ? fields.split(',') : [];
    const product = await ProductController.getProduct(id, fields);

    res.status(HTTPStatus.OK).json(product);
  }),
);

routes.post(
  '/',
  authJWT,
  sellerRole,
  catchException(async (req, res) => {
    const {
      body,
      user: { _id: userId },
    } = req;
    const product = await ProductController.addProduct(body, userId);
    return res.status(HTTPStatus.CREATED).json(product);
  }),
);

routes.put(
  '/:id',
  authJWT,
  sellerRole,
  catchException(async (req, res) => {
    const {
      body,
      params: { id },
      user: { _id: userId },
    } = req;
    const product = await ProductController.editProduct(id, body, userId);
    return res.status(HTTPStatus.OK).json(product);
  }),
);

routes.delete(
  '/:id',
  authJWT,
  sellerRole,
  catchException(async (req, res) => {
    const {
      params: { id },
      user: { _id: userId },
    } = req;
    await ProductController.deleteProduct(id, userId);
    return res.sendStatus(HTTPStatus.ACCEPTED);
  }),
);

export default routes;
