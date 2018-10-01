import HTTPStatus from 'http-status';
import * as Yup from 'yup';

import * as Product from './product.services';

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAllProducts();
    res.status(HTTPStatus.OK).json(products);
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findProductById(id);
    res.status(HTTPStatus.OK).json(product);
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
  const productSchema = Yup.object().shape({
    name: Yup.string().required(),
    price: Yup.number().required(),
    taxPrice: Yup.number().required(),
    shippingPrice: Yup.number().required(),
    description: Yup.string().required(),
  });

  try {
    await productSchema.validate(req.body);
    const product = await Product.createProduct(req.body);

    res.status(HTTPStatus.OK).json(product);
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    next(error.errors || error);
  }
};

export const editProduct = async (req, res, next) => {
  const productSchema = Yup.object().shape({
    name: Yup.string(),
    price: Yup.number(),
    taxPrice: Yup.number(),
    shippingPrice: Yup.number(),
    description: Yup.string(),
  });

  try {
    const { id } = req.params;
    await productSchema.validate(req.body);

    const product = await Product.editProduct(id, req.body);

    res.status(HTTPStatus.OK).json(product);
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    next(error.errors || error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const isDeleted = await Product.deleteProductById(id);

    if (!isDeleted) {
      throw Error;
    }

    return res.sendStatus(HTTPStatus.ACCEPTED);
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    return next(error);
  }
};
