import { User } from "./users.model";


export const findLastUserID = async () => {
    const lastUser = await User.findOne({}, { id: 1, _id: 0 }).sort({ createdAt: -1 }).lean();
    return lastUser?.id;
}

export const generatedUserID = async () => {
    const currentID = (await findLastUserID()) || String(0).padStart(5, '0');
    const incrementedUserID = String(parseInt(currentID) + 1).padStart(5, '0');
    return incrementedUserID;
}