import { Model } from 'mongoose';

export type TUser = {
  id: string;
  role: string;
  password: string;
};

// export type UserModel = Model<TUser, object>;
export type UserModel = Model<TUser, Record<string, unknown>>;
