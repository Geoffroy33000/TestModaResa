import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import StaffValidator from 'App/Validators/StaffValidator';
import StaffService from 'App/Services/Staff';
export default class StaffController {
    public async createStaff( request: HttpContextContract) {
        const staffData = await request.request.validate(StaffValidator);

        const staff = await StaffService.CreateStaff(staffData);

        return staff;
    }

    public async getAllStaff() {
        const staffs = await StaffService.GetAllStaff();

        return staffs;
    }

    public async getOneStaff({ params }: HttpContextContract) {
        const { staffId } = params;

        const staff = StaffService.GetOneStaff(staffId);

        return staff;
    }
}
