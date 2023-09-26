import {  Request, Response } from 'express';

import { Multa, MultaI } from '../models/Multa';

export class MultaController {


    public async getAllMulta(req: Request, res:Response){
        try {
            const multa: MultaI[] = await Multa.findAll()
            res.status(200).json({multa})
        } catch (error) {

        }
    }
}