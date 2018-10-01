import mongoose from 'mongoose';

import { ProductModel } from './product.model';

export const findAllProducts = async () => {
  try {
    const products = await ProductModel.where();
    return products;
  } catch (error) {
    throw error;
  }
};

export const findProductById = async (id) => {
  try {
    const product = await ProductModel.findOne(mongoose.Types.ObjectId(id));
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

export const editProduct = async (id, info) => {
  try {
    const product = await findProductById(id);

    Object.keys(info).forEach((key) => {
      product[key] = info[key];
    });

    await product.save();
    return product;
  } catch (error) {
    throw error;
  }
};

export const deleteProductById = async (id) => {
  try {
    const product = await findProductById(id);
    await product.remove();
    return true;
  } catch (error) {
    throw error;
  }
};
