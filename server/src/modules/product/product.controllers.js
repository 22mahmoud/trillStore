import * as Yup from 'yup';

import isValidMongoObjectID from '../../utils/mongoObjectIdValidation';
import * as Product from './product.services';

export const getAllProducts = async (offset, limit, fields) => {
  const schema = Yup.object().shape({
    offset: Yup.number().required(),
    limit: Yup.number().required(),
    fields: Yup.array().notRequired(),
  });

  await schema.validate({ offset, limit, fields });

  const products = await Product.findAllProducts(offset, limit, fields);
  return products;
};

export const getProduct = async (id, fields) => {
  const schema = Yup.object().shape({
    id: Yup.mixed().test('ownerId', 'productId is not ObjectID', value => isValidMongoObjectID(value)),
    fields: Yup.array().notRequired(),
  });

  await schema.validate({ id, fields });

  const product = await Product.findProductById(id, fields);
  return product;
};

export const addProduct = async (args, userId) => {
  const productSchema = Yup.object().shape({
    name: Yup.string().required(),
    price: Yup.number().required(),
    taxPrice: Yup.number().required(),
    shippingPrice: Yup.number().required(),
    description: Yup.string().required(),
    owner: Yup.mixed().test('ownerId', 'owner is not ObjectID', value => isValidMongoObjectID(value)),
  });

  await productSchema.validate({ ...args, owner: userId });

  const product = await Product.createProduct({ ...args, owner: userId });

  return product;
};

export const editProduct = async (productId, args, userId) => {
  const productSchema = Yup.object().shape({
    id: Yup.mixed().test('ownerId', 'productId is not ObjectID', value => isValidMongoObjectID(value)),
    name: Yup.string(),
    price: Yup.number(),
    taxPrice: Yup.number(),
    shippingPrice: Yup.number(),
    description: Yup.string(),
    owner: Yup.mixed().test('ownerId', 'owner is not ObjectID', value => isValidMongoObjectID(value)),
  });

  await productSchema.validate({ ...args, id: productId, owner: userId });

  const product = await Product.editProduct(productId, args, userId);

  return product;
};

export const deleteProduct = async (productId, userId) => {
  const productSchema = Yup.object().shape({
    id: Yup.mixed().test('ownerId', 'productId is not ObjectID', value => isValidMongoObjectID(value)),
    owner: Yup.mixed().test('ownerId', 'owner is not ObjectID', value => isValidMongoObjectID(value)),
  });

  await productSchema.validate({ id: productId, owner: userId });

  await Product.deleteProductById(productId, userId);
};
