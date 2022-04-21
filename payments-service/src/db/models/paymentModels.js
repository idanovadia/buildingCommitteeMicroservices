import { DataTypes, Model } from  "sequelize";
import sequelize from "../connection";

export class Payment extends Model {}
Payment.init({
    amount: {
        allowNull: false,
        type: DataTypes.STRING
    },
    eventID: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    },
    userID: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    statusID: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    }
},{
    modelName: "payments",
    sequelize
})