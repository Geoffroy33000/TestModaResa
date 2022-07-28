import Appointment from "App/Models/Appointment";

export default async function CreateAppointment(data: any): Promise<Appointment> {
  const appointment = await Appointment.create(data);

  return appointment;
}
