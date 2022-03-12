export { };
import express, { Request, Response } from "express";
import { createCustomer } from './customer.controller';
const LendingService = require("../services/lending.service");
const app = express();

// Permite crear un prestamo
export const createLending = async (req: Request, res: Response) => {

    try {

        let lending = await LendingService.createLending(req);

        return res.status(200).json({
            "status": 200,
            "message": "Registro exitoso del prestamo",
            lending 
        });


    } catch (e) {

    }

};


module.exports = app;