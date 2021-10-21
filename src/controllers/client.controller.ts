import { Request, Response } from "express";
import { ClientService } from "../services";
const createClient = async (req: Request, res: Response) => {
  const client = await ClientService.createClient(req.body);
  if (!client) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error creating user",
    });
  }

  return res.json({
    success: true,
    client,
  });
};

const getAllClients = async (req: Request, res: Response) => {
  const clients = await ClientService.getAllClients();
  if (!clients) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error get all clients",
    });
  }

  return res.json({
    success: true,
    clients,
  });
};

const getAveragedClients = async (req: Request, res: Response) => {
  const average = await ClientService.getAveragedClients();
  if (!average) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error get average clients",
    });
  }
  return res.json({
    success: true,
    averageClients: average,
  });
};

export default {
  createClient,
  getAllClients,
  getAveragedClients,
};
