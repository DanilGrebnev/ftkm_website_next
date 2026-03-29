import 'server-only'

import mongoose, { Schema, Document } from 'mongoose'

export interface IUserDoc extends Document {
    login: string
    password: string
}

export const UserSchema = new Schema<IUserDoc>({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})
