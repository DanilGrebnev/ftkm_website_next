import 'server-only'

import mongoose, { Model } from 'mongoose'

import { UserSchema, type IUserDoc } from '@/entities/auth/api/schemas/user'

export const UserModel: Model<IUserDoc> =
    mongoose.models.User || mongoose.model<IUserDoc>('User', UserSchema, 'users')
