import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import AppointmentsValidator from 'App/Validators/AppointmentsValidator';
import AppointmentsService from 'App/Services/Appointments';

export default class AppointmentsController {
    public async createAppointment( request: HttpContextContract) {
        const appointmentData = await request.request.validate(AppointmentsValidator);

        const appointment = await AppointmentsService.CreateAppointment(appointmentData);

        return appointment;
    }

    public async getAllAppointments() {
        const appointments = await AppointmentsService.GetAllAppointments();

        return appointments;
    }

    public async getOneAppointment({ params }: HttpContextContract) {
        const { appointmentId } = params;

        const appointment = AppointmentsService.GetOneAppointment(appointmentId);

        return appointment;
    }
}
