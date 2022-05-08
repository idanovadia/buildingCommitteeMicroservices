// import { User } from "../db/models/RegistrationModels";
import login from "../services/login/loginService.js";
import {register, registerManager, registerUser} from "../services/register/register.js"
const setupRoutes = app => {

    // app.get("/userDetails", async (req,res,next) => {
    //     console.log("UserDetails");
    //     //validation
    //     console.log(req.body);
    //     try{
    //         const user = await findUserDetailsByColumn({id: res.body.userId});
    //         return res.json(user);
    //     }catch(err){
    //         throw new Error("Registration Failed");
    //     }
    // });

    // app.login("/login", async (req,res,next) => {
    //     console.log("login");
    //     //validation
    //     console.log(req.body);
    //     const body = req.body;
    //     try{
    //         const user = await findUserDetailsByColumn(
    //             {
    //                 username: body.username,
    //                 password: body.password
    //             }
    //         );
    //         const token = ""
    //         return res.json(user);
    //     }catch(err){
    //         throw new Error("Registration Failed");
    //     }
    // });

    // const findUserDetailsByColumn = (filters) => {
    //     return await User.find(
    //         {where: filters}
    //     );
    // };

    app.post("/register", async (req,res,next) => {
        console.log("route register");
        console.log(req.body);
        try {
            await registerUser(req.body.user);
            return res.json("User successfully registered").status(201);
        }catch(err){
            console.log("error register route : " + err);
            return res.json(`${err}`).status(500);
        }
    });

    app.post("/manager/register", async (req,res,next) => {
        console.log("route register");
        console.log(req.body);
        const manager = req.body.manager;
        try {
            await registerManager(manager);
            return res.json("Manager successfully registered").status(201);
        }catch(err){
            console.log("error register route : " + err);
            return res.json(`${err}`).status(500);
        }
    });

    app.post("/login", async (req,res,next) => {
        console.log("route login");
        console.log(req.body);
        const user = req.body.userLogin;
        try {
            const token = await login(user);
            return res.json({token}).status(200);
        }catch(err){
            console.log("error login route : " + err);
            return res.json(`${err}`).status(500);
        }
    });
}

export default setupRoutes;