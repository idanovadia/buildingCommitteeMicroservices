import { DataTypes, Model } from  "sequelize";
import sequelize from "../connection";

export class PaymentStatus extends Model {}

PaymentStatus.init({
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
},{
    modelName: "paymentStatus",
    sequelize
})