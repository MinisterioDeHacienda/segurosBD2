import { database } from "../database/db";
import { Model, DataTypes} from "sequelize";

export class Posser extends Model {
    public tarjetaPropiedad!: string;
    public ciudadExp!: string;
    public matricula!: string;
}

export interface PosserI {
    tarjetaPropiedad: string;
    ciudadExp: string;
    matricula: string;
}

Posser.init(
    {

        tarjetaPropiedad: {
            type: DataTypes.STRING,
            allowNull: false
        },

        ciudadExp: {
            type: DataTypes.STRING,
            allowNull: false
        },

        matricula: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "possers",
        sequelize: database,
        timestamps: true
    }
);