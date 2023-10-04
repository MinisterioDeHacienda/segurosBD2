import { Model, DataTypes, EnumDataType } from "sequelize";
import { database } from "../database/db";
import { EnumType } from "typescript";
import { Multa } from "./Multa";
import { Vehiculo } from "./Vehiculo";
import { Involucrar } from "./Involucrar";

export class Persona extends Model {
    public DNI!: number;
    public nombrePersona!: string;
    public apellidoPersona!: string;
    public direccionPersona!: string;
    public ciudadPersona!: string;
    public tipoPersona!: EnumType;
    public telefonoPersona!: string;
}

export interface PersonaI {
    DNI: number;
    nombrePersona: string;
    apellidoPersona: string;
    direccionPersona: string;
    ciudadPersona: string;
    tipoPersona: EnumType;
    telefonoPersona: string;
}

Persona.init(
    {

        DNI: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        nombrePersona: {
            type: DataTypes.STRING,
            allowNull: false
        },

        apellidoPersona: {
            type: DataTypes.STRING,
            allowNull: false
        },

        direccionPersona: {
            type: DataTypes.STRING,
            allowNull: false
        },

        ciudadPersona: {
            type: DataTypes.STRING,
            allowNull: false
        },

        tipoPersona: {
            type: DataTypes.ENUM('Activo', 'Inactivo'),
            allowNull: false
        },

        telefonoPersona: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        tableName: "personas",
        sequelize: database,
        timestamps: true
    }
);
Persona.hasMany(Multa)
Multa.belongsTo(Persona)
