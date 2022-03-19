import express, { Request, Response } from "express";
const CustomerService = require("../services/customer.service");
const app = express();


// Permite crear un nuevo cliente
export const createCustomer = async (req: Request, res: Response) => {

    try {
        let customers = await CustomerService.createCustomer(req);

        return res.status(200).json({
            "status": 200,
            "message": "Registro exitoso del cliente",
            "customer": customers
        });

    } catch (e) {
        console.log(e);
    }
};

//module.exports = app;