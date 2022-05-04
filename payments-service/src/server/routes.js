import { Payment } from "#root/db/models/paymentModels";
// import { paymentStatus } from "#root/db/models/paymentStatusModel";

const setupRoutes = app => {
    app.get("/payments", async (req,res,next) => {
        console.log("get payments");
        const payments = await Payment.findAll();
        return res.json(payments);
    });

    app.post("/payment", async (req,res,next) => {
        console.log("save payment");
        console.log(req.body);
        // const status = await paymentStatus.find(req.)
        const payments = await Payment.create(req.body);
        return res.json(payments);
    });
}

export default setupRoutes;