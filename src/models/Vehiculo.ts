import { Model, DataTypes, EnumDataType } from "sequelize";
import { database } from "../database/db";
import { Persona } from "./Persona";
import { Posser } from "./Posser";
import { Involucrar } from "./Involucrar";

export class Vehiculo extends Model {
    public matriculaVehiculo!: string;
    public marcaVehiculo!: string;
    public modeloVehiculo!: string;
}

export interface VehiculoI {
    matriculaVehiculo: string;
    marcaVehiculo: string;
    modeloVehiculo: string;
}

Vehiculo.init(
    {

        matriculaVehiculo: {
            type: DataTypes.STRING,
            allowNull: false
        },

        marcaVehiculo: {
            type: DataTypes.STRING,
            allowNull: false
        },

        modeloVehiculo: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "vehiculos",
        sequelize: database,
        timestamps: true
    }
);
Vehiculo.belongsToMany(Persona,{through: Posser})
Persona.belongsToMany(Vehiculo,{through:Posser})
Persona.belongsToMany(Vehiculo,{through: Involucrar})
Vehiculo.belongsToMany(Persona,{through: Involucrar})
