import express from "express";
import { ClientRoutes } from "./routes";
import db from "./database/connection";
import { PORT } from "./utils/constants";
class Server {
  private app;
  private port;
  private paths;
  constructor() {
    this.app = express();
    this.port = PORT;

    this.paths = {
      clients: "/api/clients",
    };

    // database
    this.dbConnection();
    // Middlewares
    this.middlewares();

    // Routes App
    this.routes();
  }

  async dbConnection() {
    try {
      await db.sync();
      console.log("Database online");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use(this.paths.clients, ClientRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server on port : ", this.port);
    });
  }
}

export default Server;
