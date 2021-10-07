export{}

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

class Payment extends Model{}

Payment.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    paymentDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    paymentValue:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    paymentMethod:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: "Payment",
    timestamps: true
});

module.exports = Payment;