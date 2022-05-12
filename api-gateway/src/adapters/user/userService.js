import got from "got";

const USER_SERVICE_URI = "http://users-service:7101";


export default class UserService {

    static async createUser(user) {
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

    static async userDetails() {
        console.log("userDetails");
        const body = await got.get(
            `${USER_SERVICE_URI}/myDetails`
        ).json();
        return body;
    }
}