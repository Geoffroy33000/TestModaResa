import Staff from 'App/Models/Staff';

export default async function GetOneStaff(id: number): Promise<Staff> {
    const staff = await Staff.query()
        .where('id', id)
        .firstOrFail()

    return staff;
}