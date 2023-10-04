import { MultaRoutes } from './multa';
import { PersonaRoutes } from './persona';
import { PosserRoutes } from './posser';
import { VehiculoRoutes } from './vehiculo';

export class Routes {
    public personaRoutes: PersonaRoutes = new PersonaRoutes();
    public multaRoutes: MultaRoutes = new MultaRoutes();
    public vehiculoRoutes: VehiculoRoutes = new VehiculoRoutes();
    public posserRoutes: PosserRoutes = new PosserRoutes();
}