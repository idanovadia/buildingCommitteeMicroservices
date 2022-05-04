import PaymentService from "../../../adapters/paymentService.js";

const createPaymentResolver = async(
    obj,
    {amount,description,eventID,userID,statusID}) => {
    return await PaymentService.createPayment({amount,description,eventID,userID,statusID});
}

export default createPaymentResolver;