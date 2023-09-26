import { Request, Response, Application, Router } from "express";

import { MultaController } from '../controllers/multa.controller';

export class MultaRoutes {
    public multaController: MultaController =  new MultaController();

    public routes(app: Application): void {
        app.route("/multas").get(this.multaController.getAllMulta)
    }
}