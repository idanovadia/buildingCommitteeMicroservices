import { User } from "../../../../adapters/user/userModel.js";
import UserService from "../../../../adapters/user/userService.js";


const createUserResolver = async(
    obj,
    {firstName,lastName,phone,password,email,username,groupID,address}) => {
    return await UserService.createUser(
        new User(firstName,lastName,phone,password,email,username,groupID,address)
    );
}

export default createUserResolver;