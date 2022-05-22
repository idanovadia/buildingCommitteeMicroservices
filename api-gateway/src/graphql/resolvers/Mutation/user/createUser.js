import { User } from "../../../../adapters/user/userModel.js";
import UserService from "../../../../adapters/user/userService.js";

const createUserResolver = async(obj,{user}) => {
    return await UserService.createUser(user);
}

export default createUserResolver;