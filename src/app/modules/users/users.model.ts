import { Model, Schema, model } from "mongoose";
import { IUser } from "./users.interface";


// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, object>;

// 2. Create a Schema corresponding to the document interface.
const userschema = new Schema <IUser>({
    id:{type:"string", required: true, unique: true},
    role: {type:"string", required: true},
    password: {type:"string", required: true},
},
{timestamps:true});

// 3. Create a Model.
export const User = model <IUser, UserModel>('User', userschema);