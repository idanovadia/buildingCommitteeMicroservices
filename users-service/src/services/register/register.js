import generateUUID from "../../helpers/generateUUID.js";
import { User } from "#root/db/models/RegistrationModels";
import { Address } from "../../db/models/AddressModels.js";
import {validateUserRegister} from "./registerValidation.js";

export const register = async (user) => {
    console.log("service register");
    const validation = await validateUserRegister(user);
    console.log("validation "  + JSON.stringify(validation));
    if(!validation) throw new Error("validate User Register - Error");
    await saveUserInfo(user);
};

const saveUserInfo = async(user) => {
    const { address, ...myUser } = user;
    const addressID = await saveAddress(address);
    await saveUser( {...myUser, addressID : addressID });
}

const saveAddress = async(address) => {
    address["id"] = generateUUID();
    await Address.create(address);
    return address.id;
}

const saveUser = async(user) => {
    user["id"] = generateUUID();
    await User.create(user);
    return user.id;
}

