import { Request, Response, Application, Router } from "express";

import { PersonaController } from '../controllers/persona.controller';

export class PersonaRoutes {
    public personaController: PersonaController =  new PersonaController();

    public routes(app: Application): void {
        app.route("/personas").get(this.personaController.getAllPersona)
    }
}