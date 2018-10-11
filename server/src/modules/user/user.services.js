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
    return user;
  } catch (error) {
    throw error;
  }
};
