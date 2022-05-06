import UserService from "../../../../adapters/user/userService.js";


const createUserResolver = async(obj,{manager}) => {
    console.log("createUserResolver");
    return await UserService.createManager(manager);
}

export default createUserResolver;