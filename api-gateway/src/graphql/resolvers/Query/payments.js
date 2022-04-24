import PaymentService from "../../../adapters/paymentService.js";

const paymentResolver = async () => {
    return await PaymentService.fetchAllPayments();
};

export default paymentResolver;