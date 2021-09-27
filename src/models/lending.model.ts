export {};
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../util/database");

const Customer = require("../models/customer.model");

class Lending extends Model {}

Lending.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    amount:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    balance:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    quotaNumber:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    startDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    typePayment:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: "Lending",
    timestamps: true,
});

// Lending.belongsToMany(Customer, { through: "customer_lending" });
// Lending.associate = function (models: any){
//     Lending.belongsToMany(models.Customer, { through: "customer_lending" });
// }

module.exports = Lending;
