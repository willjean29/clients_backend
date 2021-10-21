import { Sequelize } from "sequelize";
import { DB_NAME, DB_PASS, DB_HOST, DB_USER } from "../utils/constants";

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  define: {
    timestamps: true,
  },
});

export default db;
