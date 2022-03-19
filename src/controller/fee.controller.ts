import express, { Request, Response } from "express";
const FeeService = require("../services/fee.service");

// permite crear las cuotas de un prestamo
export const createFee = async (req: Request, res: Response) => {

    try {
        let fees = await FeeService.createFee(req);

        return res.status(200).json({
            "status": 200,
            "message": "Registro exitoso de las cuotas"
        });

    } catch (e) {

    }

};