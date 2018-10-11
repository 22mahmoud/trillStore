import { closeDB, initDB, resetDB } from 'mongoEnv';
import { fakeUser } from 'fixture';

import { UserModel } from '../user.model';

beforeAll(initDB);
afterAll(closeDB);
beforeEach(resetDB);

describe('User Model', () => {
  describe('Create User', () => {
    test('email must be unique', async () => {
      try {
        await UserModel.create(fakeUser);
        await UserModel.create(fakeUser);
      } catch (error) {
        expect(error.message).toBe('User validation failed: email: mahmoud@me.com already taken!');
      }
    });

    test('valid email', async () => {
      try {
        const InvalidEmail = { ...fakeUser };
        InvalidEmail.email = 'mahmoud@';
        await UserModel.create(InvalidEmail);
      } catch (error) {
        expect(error.message).toBe('User validation failed: email: mahmoud@ is not a valid email');
      }
    });

    test('password length less than 6 char', async () => {
      try {
        const InvalidPassword = { ...fakeUser };
        InvalidPassword.password = '12345';
        await UserModel.create(InvalidPassword);
      } catch (error) {
        expect(error.message).toBe('User validation failed: password: Password need to be longer!');
      }
    });
  });

  // Required Fields
  describe('Required fields', () => {
    test('email', async () => {
      try {
        const userWithoutEmail = { ...fakeUser };
        delete userWithoutEmail.email;
        await UserModel.create(userWithoutEmail);
      } catch (error) {
        expect(error.message).toBe('User validation failed: email: Path `email` is required.');
      }
    });
    test('password', async () => {
      try {
        const userWithoutPassword = { ...fakeUser };
        delete userWithoutPassword.password;
        await UserModel.create(userWithoutPassword);
      } catch (error) {
        expect(error.message).toBe(
          'User validation failed: password: Path `password` is required.',
        );
      }
    });
    test('firstName', async () => {
      try {
        const userWithoutFirstName = { ...fakeUser };
        delete userWithoutFirstName.firstName;
        await UserModel.create(userWithoutFirstName);
      } catch (error) {
        expect(error.message).toBe(
          'User validation failed: firstName: Path `firstName` is required.',
        );
      }
    });
    test('lastname', async () => {
      try {
        const userWithoutLastName = { ...fakeUser };
        delete userWithoutLastName.lastName;
        await UserModel.create(userWithoutLastName);
      } catch (error) {
        expect(error.message).toBe(
          'User validation failed: lastName: Path `lastName` is required.',
        );
      }
    });
  });

  // Model Methods
  describe('methods', () => {
    test('Hash password before save user in the database', async () => {
      const user = await UserModel.create(fakeUser);
      expect(user.password).not.toBe(fakeUser.password);
    });

    test('when update user password mongoose rehashed the new one', async () => {
      const user = await UserModel.create(fakeUser);
      const hashedPassword = user.password;
      user.password = '10265468879';
      await user.save();
      const newHashedPassword = user.password;
      expect(hashedPassword).not.toBe(newHashedPassword);
    });

    test("Update any user's field Except the password is must keep the same hashedpassword", async () => {
      const user = await UserModel.create(fakeUser);
      const hashedPassword = user.password;
      user.firstName = 'Ahmed';
      user.lastName = 'ash';
      await user.save();
      const newHashedPassword = user.password;
      expect(hashedPassword).toBe(newHashedPassword);
    });

    test('Compare is user enters a valid password', async () => {
      await UserModel.create(fakeUser);
      const user = await UserModel.findOne({ email: fakeUser.email });
      const IsValidPassword = user.comparePassword(fakeUser.password);
      expect(IsValidPassword).toBe(true);
    });

    test('if user enters invalid password', async () => {
      await UserModel.create(fakeUser);
      const user = await UserModel.findOne({ email: fakeUser.email });
      const IsValidPassword = user.comparePassword('1234');
      expect(IsValidPassword).toBe(false);
    });
  });
});
