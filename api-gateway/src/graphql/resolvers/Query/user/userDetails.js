import UserService from "../../../../adapters/user/userService.js";

const userResolver = async (obj) => {
    return await UserService.userDetails();
};

export default userResolver;