import {  Request, Response } from 'express';


import { Persona, PersonaI } from '../models/Persona';

export class PersonaController {


    public async getAllPersona(req: Request, res:Response){
        try {
            const persona: PersonaI[] = await Persona.findAll(
                {
                    where:{tipoPersona: 'Activo'}
                }
                
            )
            res.status(200).json({persona})
        } catch (error) {

        }
    }
}