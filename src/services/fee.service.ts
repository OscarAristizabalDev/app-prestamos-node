const db = require("../models");
const Fee = db.fee;

// Permite crear las cuotas de un prestamo
exports.createFee = async (data: any) => {

    try {
        let fee = await Fee.bulkCreate(data.body.fees);
        return fee;
    } catch (e) {
        throw Error('Error while creating Fee: ' + e);
    }

}