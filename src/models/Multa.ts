import { Model, DataTypes, EnumDataType } from "sequelize";
import { database } from "../database/db";

export class Multa extends Model {
    public consecutivoMultas!: string;
    public persona_id!: number;
    public fechayHora!: Date;
    public lugarInfraccion!: string;
}

export interface MultaI {
    consecutivoMultas: string;
    persona_id: number;
    fechayHora: Date;
    lugarInfraccion: string;
}

Multa.init(
    {

        consecutivoMultas: {
            type: DataTypes.STRING,
            allowNull: false
        },

        persona_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Multa, 
                key: 'id',      
            },
        },

         fechayHora: {
            type: DataTypes.DATE,
            allowNull: false
        },

        lugarInfraccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "multas",
        sequelize: database,
        timestamps: true
    }
);