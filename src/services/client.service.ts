import { ClientDto } from "../dtos/client.dtos";
import Client, { IClient } from "../models/client.models";
import { calculateAvg } from "../utils/methods";
const createClient = async (clientDto: ClientDto) => {
  try {
    const client = await Client.create(clientDto);
    client.save();
    return client;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const getAllClients = async () => {
  try {
    const clients = await Client.findAll();
    return clients;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const getAveragedClients = async () => {
  try {
    const clients = await Client.findAll();
    const average = calculateAvg(clients);
    return average;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export default {
  createClient,
  getAllClients,
  getAveragedClients,
};
