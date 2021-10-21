import { Sequelize, DataTypes, Model } from "sequelize";
import db from "../database/connection";

export interface IClient extends Model {
  id: number;
  name: string;
  lastName: string;
  dateOfBirth: string;
}

const clientSchema = db.define<IClient>("clients", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default clientSchema;
