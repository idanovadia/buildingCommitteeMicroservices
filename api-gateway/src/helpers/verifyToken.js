import jwt from "jsonwebtoken";

const verifyToken = (token) => {
    const authHeader =  token;
    console.log(authHeader);
    if(authHeader){
        const token = authHeader.split(" ")[1];
        return jwt.verify(token,process.env.JWT_SEC,(err,user) => {
            if(err) throw new Error("token not valid");
            return user;
        });
    }else{
        throw new Error("token not valid");
    }
}

export default verifyToken;

// export const verifyTokenAndAuthorization = (req, res , next) => {
//     verifyToken(req, res, () => {
//         if(req.user.id === req.params.id || req.user.isAdmin) next();
//         else return res.status(403).json("You are not allowed");
//     });
// };

// export const verifyTokenAndAdmin = (req, res , next) => {
//     verifyToken(req, res, () => {
//         if(req.user.isAdmin) next();
//         else return res.status(403).json("You are not allowed");
//     });
// };