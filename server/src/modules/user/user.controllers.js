import * as Yup from 'yup';

import * as User from './user.services';

export const createUser = async (userInfo) => {
  const userSchema = Yup.object()
    .shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
      email: Yup.string()
        .email()
        .required(),
    })
    .required();
  try {
    await userSchema.validate(userInfo);
    const user = await User.insertUser(userInfo);
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  const user = await User.findUserByEmail(email);
  if (!user) {
    throw new Error('User is not exist');
  }
  return user;
};
