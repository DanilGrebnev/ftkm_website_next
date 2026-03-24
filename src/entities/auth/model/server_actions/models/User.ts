import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IUserDoc extends Document {
    login: string
    password: string
}

const UserSchema = new Schema<IUserDoc>({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

export const UserModel: Model<IUserDoc> =
    mongoose.models.User || mongoose.model<IUserDoc>('User', UserSchema, 'users')
