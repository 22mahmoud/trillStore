import { hashSync, compareSync } from 'bcrypt-nodejs';
import uniqueValidator from 'mongoose-unique-validator';
import mongoose from 'mongoose';

import { isValidEmail } from '../../utils/emailValidation';

const CUSTOMER = 'CUSTOMER';
const ADMIN = 'ADMIN';
const ROULES = [CUSTOMER, ADMIN];

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: email => isValidEmail(email),
        msg: '{VALUE} is not a valid email',
      },
    },
    password: {
      type: String,
      required: true,
      minlength: [6, 'Password need to be longer!'],
      validate: {
        validator: password => password.length >= 6,
      },
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    rule: {
      type: String,
      enum: ROULES,
      default: CUSTOMER,
    },
  },
  { timestamps: true },
);

userSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

// eslint-disable-next-line func-names
userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this.hashPassword(this.password);
    return next();
  }
  return next();
});

userSchema.methods = {
  hashPassword(password) {
    return hashSync(password);
  },

  comparePassword(password) {
    return compareSync(password, this.password);
  },
};

export const UserModel = mongoose.model('User', userSchema);
