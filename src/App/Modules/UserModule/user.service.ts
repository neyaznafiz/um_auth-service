import config from '../../../Config/config';
import ApiError from '../../../Errors/apiError';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

const createUser = async (user: TUser): Promise<TUser | null> => {
  // auto generatedincremental id
  const id = await generateUserId();

  user.id = id;
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user..!');
  }
  return createdUser;
};

export default {
  createUser,
};
