
import { User } from "../../db/models/LoginModels.js";

export const loginInputValidation = (user) => {
    return user.username && user.password;
}

export const checkLoginPassword = async(user,searchedUser) => {
    if(user == null) throw new Error("User or password are not correct");
    else return user.password === searchedUser.password;
}

export const searchUser = async(user) => {
    return await User.findOne({ where: { username: user.username } });
}