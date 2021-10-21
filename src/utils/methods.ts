import { IClient } from "../models/client.models";
import moment from "moment";
export const calculateAvg = (clients: IClient[]) => {
  const arrayClientYears = clients.map((client) =>
    moment().diff(client.dateOfBirth, "years")
  );
  const averageClient =
    arrayClientYears.reduce((acc, year) => acc + year) / clients.length;
  return parseFloat(averageClient.toFixed(2));
};
