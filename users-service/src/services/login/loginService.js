import { checkLoginPassword, loginInputValidation } from "./loginValidation";
// const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const login = async(user) => {
    if( await loginInputValidation(user)) {
        const dbUser = searchUser(user);
        if(await checkLoginPassword(user))
        {
            return createToken(dbUser);
        }
    }
    throw new Error("User or password are not correct");
}

const createToken = (user) => {
    const accessToken = jwt.sign(
    {
        id: user.id,
        isManager: user.isAdmin,
    },
    process.env.JWT_SEC,
    {expiresIn:"3d"}
    );
    res.status(200).json({accessToken});
    return;
}

export default login;