import Staff from 'App/Models/Staff';

export default async function Getstaff() {
    const staff = Staff.all();

    return staff;
}