import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import ClientsValidator from 'App/Validators/ClientsValidator';
import ClientsService from 'App/Services/Clients';

export default class ClientsController {

    public async createClient( request: HttpContextContract) {
        const clientData = await request.request.validate(ClientsValidator);

        const client = await ClientsService.CreateClient(clientData);

        return client;
    }

    public async getAllClients() {
        const clients = await ClientsService.GetClients();

        return clients;
    }

    public async getOneClient({ params }: HttpContextContract) {
        const { clientId } = params;

        const client = ClientsService.GetOneClient(clientId);

        return client;
    }
}
