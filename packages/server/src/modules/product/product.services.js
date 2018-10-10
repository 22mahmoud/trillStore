import mongoose from 'mongoose';

import { ProductModel } from './product.model';
import { ErrorWithStatusCode } from '../../utils/errorWithStatusCode';

export const findAllProducts = async (skip, limit, fields = []) => {
  try {
    const products = await ProductModel.find({})
      .select(fields)
      .skip(skip)
      .limit(limit);

    return products;
  } catch (error) {
    throw error;
  }
};

export const findProductById = async (id, fields = []) => {
  try {
    const product = await ProductModel.findOne(mongoose.Types.ObjectId(id)).select(fields);
    return product;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (info) => {
  try {
    const product = await ProductModel.create(info);
    return product;
  } catch (error) {
    throw error;
  }
};

export const editProduct = async (id, info, ownerId) => {
  try {
    const product = await findProductById(id);

    if (ownerId.toString() !== product.owner.toString()) {
      throw new ErrorWithStatusCode(401, 'unauthorized');
    }

    Object.keys(info).forEach((key) => {
      product[key] = info[key];
    });

    await product.save();
    return product;
  } catch (error) {
    throw error;
  }
};

export const deleteProductById = async (id, ownerId) => {
  try {
    const product = await findProductById(id);

    if (ownerId.toString() !== product.owner.toString()) {
      throw new ErrorWithStatusCode(401, 'unauthorized');
    }

    await product.remove();
    return true;
  } catch (error) {
    throw error;
  }
};
