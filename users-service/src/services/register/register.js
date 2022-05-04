import generateUUID from "../../helpers/generateUUID.js";
import { User } from "#root/db/models/RegistrationModels";
import {validateUserRegister} from "./registerValidation.js";

export const register = async (user) => {
    console.log("service register");
    var currentUser = user;
    currentUser["id"] = generateUUID();
    const validation = await validateUserRegister(currentUser);
    console.log("validation "  + JSON.stringify(validation));
    if(!validation) throw new Error("validate User Register - Error");
    await User.create(currentUser);
};

