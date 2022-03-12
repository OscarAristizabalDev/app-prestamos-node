export{}
const db = require("../models");

const Customers = db.customers;


// Permite crear un nuevo cliente
exports.createCustomer = async function (data: any) {

    try {

        let customers = await Customers.create(data.body);

        return customers;
        //console.log(query.body.name);

    } catch (e) {
        throw Error('Error while creating customer: '+e);
    }
} 