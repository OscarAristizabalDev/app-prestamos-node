export{}
const db = require("../models");
const Lending = db.lending;


// Permite crear un prestamo
exports.createLending = async (data: any) => {

    try {    
        let lending = await Lending.create(data.body)

        return lending;

    } catch (e) {
        throw Error('Error while creating lending: '+e);
    }
}