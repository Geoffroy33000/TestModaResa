import Staff from "App/Models/Staff";

export default async function CreateStaff(data: any): Promise<Staff> {
  const staff = await Staff.create(data);

  return staff;
}
