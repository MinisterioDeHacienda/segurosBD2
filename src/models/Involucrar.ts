import { database } from "../database/db";
import { Model, DataTypes} from "sequelize";

export class Involucrar extends Model {
    public hora!: Date;
    public matriculaId!: number;
    public personaId!: number;
}

export interface InvolucrarI {
    hora: Date;
    matriculaId: number;
    personaId: number;
}


Involucrar.init(
    {

        hora: {
            type: DataTypes.DATE,
            allowNull: false
        },

    },
    {
        tableName: "involucrar",
        sequelize: database,
        timestamps: false
    }
);
