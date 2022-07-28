import Client from "App/Models/Client";

export default async function CreateClient(data: any): Promise<Client> {
  const client = await Client.create(data);

  return client;
}
