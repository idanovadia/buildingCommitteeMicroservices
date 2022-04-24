import got from "got";

const PAYMENT_SERVICE_URI = "http://payments-service:7100";

export default class PaymentService {
    static async fetchAllPayments() {
        console.log("call PaymentService");
        return await got.get(`${PAYMENT_SERVICE_URI}/payments`).json();
    }
}