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
}