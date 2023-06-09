import config from "../../../config";
import { IUser } from "./users.interface";
import { User } from "./users.model";
import { generatedUserID } from "./users.utils";

const createUser = async (user: IUser): Promise<IUser | null> => {

    //auto-generated incremental id
    const id = await generatedUserID();
    user.id = id;

    //default password
    if (!user.password) {
        user.password = config.default_student_pass as string;
    }
    const createdUser = await User.create(user);
    if (!createdUser) {
        throw new Error("User not created");
    }
    return createdUser;
}


export default {
    createUser
}