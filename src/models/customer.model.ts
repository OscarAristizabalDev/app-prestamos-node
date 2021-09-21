export {};
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Lending = require("../models/lending.model");

class Customer extends Model {}

Customer.init({
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
},{
    sequelize,
    modelName: "Customer",
    timestamps: true
});

Customer.associate = function (models: any){
    Customer.hasMany(models.Lending, {
        foreignKey: "customerId"
      });
}



module.exports = Customer;



