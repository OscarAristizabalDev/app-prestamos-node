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


// Customer.belongsToMany(Lending, { through: "customer_lending" });
// Customer.associate = function (models: any){
//     Customer.belongsToMany(models.Lending, { through: "customer_lending" });
// }



module.exports = Customer;



