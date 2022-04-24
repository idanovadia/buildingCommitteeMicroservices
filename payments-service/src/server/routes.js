import { Payment } from "#root/db/models/paymentModels";

const setupRoutes = app => {
    app.get("/payments", async (req,res,next) => {
        console.log("get payments");
        const payments = await Payment.findAll();
        return res.json(payments);
    });
}

export default setupRoutes;