import UserService from "../../../../adapters/user/userService.js";

const loginResolver = async () => {
    return await UserService.login();
};

export default loginResolver;