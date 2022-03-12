const db = require("../models");
const Lending = db.lending;

// Permite crear un prestamo
exports.createLending = async function (data: any) {

    try {
        
        let lending = await Lending.create(data);

        return lending;

    } catch (e) {
        throw Error('Error while creating customer: '+e);
    }
}