import {User} from "../../db/models/UserDetailsModels.js"

export const getUserDetails = async ({userID}) => {
    console.log("getUserDetails");
    console.log(userID);
    const user = await User.findByPk(userID);
    console.log(user.dataValues);
    return user.dataValues;
}