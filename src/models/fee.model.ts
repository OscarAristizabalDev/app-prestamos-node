export {};

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

class Fee extends Model {}

Fee.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    number:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    expirationDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    expiredDays:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    value:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    valuePaid:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    balance:{
        type: DataTypes.DOUBLE,
        allowNull: false
    }
},{
    sequelize,
    modelName: "Fee",
    timestamps: true
});

module.exports = Fee;