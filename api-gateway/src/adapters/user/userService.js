import got from "got";
// import { RABBITMQ } from "../../helpers/rabbitMQ.js";

const USER_SERVICE_URI = "http://users-service:7101";

// const rabbitMQ = new RABBITMQ();
export default class UserService {

    // static createUserQueue = async(user) => {
    //     rabbitMQ.sendToQueue(user);
    // }

    static createUser = async(user) => {
        console.log("call createUser");
        const body = await got.post(
            `${USER_SERVICE_URI}/register`,{json: {user}}
        ).json();
        return body;
        
    }

    static async createManager(manager) {
        console.log("call createManager");
        const body = await got.post(
            `${USER_SERVICE_URI}/manager/register`,{json: {manager}}
        ).json();
        return body;
    }

    static async login(userLogin) {
        console.log("UserLogin");
        const body = await got.post(
            `${USER_SERVICE_URI}/login`,{json: userLogin}
        ).json();
        return body;
    }

    static async userDetails({userId}) {
        console.log("userDetails");
        const body = await got.get(
            `${USER_SERVICE_URI}/myDetails/${userId}`
        ).json();
        return body;
    }
}