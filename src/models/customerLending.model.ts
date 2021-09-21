export{}

import { DataTypes, Model } from "sequelize/types";
const sequelize = require("../util/database");

const Customer = require("../models/customer.model");
const Lending = require("../models/lending.model");


class CustomerLending extends Model{}

CustomerLending.init({
    customerId:{
        type: DataTypes.INTEGER,
        references: {
            model: 'Customers',
            key: 'id'
        }
    },
    lendingId:{
        type: DataTypes.INTEGER,
        references: {
            model: 'Lendings',
            key: 'id'
        }
    }
},{
    sequelize,
    modelName: "CustomerLending",
    timestamps: true,
});

// Customer.associate = function(models: any){
//     CustomerLending.belongsTo(models.Customer, {
//         foreignKey: "customerId"
//       });
// }

// Lending.associate = function(models: any){
//     CustomerLending.belongsTo(models.Lending, {
//         foreignKey: "lendingId"
//       });
// }

//module.exports = CustomerLending;
