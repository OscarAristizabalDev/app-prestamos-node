export {};
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

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
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefonoMovil:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefonoFijo:{
        type: DataTypes.INTEGER,
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



