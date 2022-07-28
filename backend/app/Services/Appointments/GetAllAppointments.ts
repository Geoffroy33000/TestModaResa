import Appointment from 'App/Models/Appointment';

export default async function GetAllAppointments() {
    const appointements = Appointment.all();

    return appointements;
}