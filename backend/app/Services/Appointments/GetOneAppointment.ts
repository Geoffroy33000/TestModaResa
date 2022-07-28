import Appointment from 'App/Models/Appointment';

export default async function GetOneAppointment(id: number): Promise<Appointment> {
    const appointment = await Appointment.query()
        .where('id', id)
        .firstOrFail()

    return appointment;
}