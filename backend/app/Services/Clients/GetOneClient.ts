import Client from 'App/Models/Client';

export default async function GetOneClient(id: number): Promise<Client> {
    const client = await Client.query()
        .where('id', id)
        .firstOrFail()

    return client;
}