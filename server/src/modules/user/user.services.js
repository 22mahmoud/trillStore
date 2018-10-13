import { UserModel } from './user.model';

export const insertUser = async (info) => {
  try {
    const user = await UserModel.create(info);
    return user;
  } catch (error) {
    throw error;
  }
};

export const findUserByEmail = async (email) => {
  try {
    const user = UserModel.findOne({ email });
    if (!user) {
      throw new Error('User is not exist');
    }
    return user;
  } catch (error) {
    throw error;
  }
};

export const findUserById = async (id, fields = []) => {
  try {
    const user = await UserModel.findById(id).select(fields);
    if (!user) {
      throw new Error('User is not exist');
    }
    return user;
  } catch (error) {
    throw error;
  }
};
