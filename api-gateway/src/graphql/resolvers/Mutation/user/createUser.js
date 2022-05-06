import { User } from "../../../../adapters/user/userModel.js";
import UserService from "../../../../adapters/user/userService.js";


// const createUserResolver = async(
//     obj,
//     {user}) => {
//     return await UserService.createUser(
//         new User(
//             {
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 phone: user.phone,
//                 password: user.password,
//                 email: user.email,
//                 username: user.username,
//                 groupID: user.groupID,
//                 address: user.address
//             }
//         ),
//     );
// }

const createUserResolver = async(obj,{user}) => {
    return await UserService.createUser(user);
}

export default createUserResolver;