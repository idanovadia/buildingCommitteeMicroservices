import { User } from "../../../../adapters/user/userModel.js";
import UserService from "../../../../adapters/user/userService.js";


const createUserResolver = async(
    obj,
    {firstName,lastName,phone,addressID,password,email,username,groupID}) => {
    return await UserService.createUser(
        new User(firstName,lastName,phone,addressID,password,email,username,groupID)
    );
}

export default createUserResolver;