import { Schema, model } from 'mongoose';
import { TUser, UserModel } from './users.interface';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: 'string',
      required: true,
      unique: true,
    },
    role: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<TUser, UserModel>('User', userSchema);
