import Client from 'App/Models/Client';

export default async function Getclients() {
    const clients = Client.all();

    return clients;
}