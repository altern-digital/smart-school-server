import Koa from "koa";

import { AttendanceRequestService } from "./service";
import { student_attendance_permission_status } from '@prisma/client';

export class AttendanceRequestController
{
    public static async getAll(context: Koa.Context) {
        try {
            const { status, student } = context.query;

            const attendance_requests = await AttendanceRequestService.getAll(
                status ? <student_attendance_permission_status>status : undefined,
                student ? parseInt(student as string) : undefined,
            );

            context.body = {
                data: attendance_requests,
            };
        }
        catch (e: any) {
            context.status = 401;
            context.body = {
                errors: [
                    e,
                ],
            };
            return;
        }
    }

    public static async getAttendanceRequest(context: Koa.Context) {
        const { id } = context.params;

        const idInt = parseInt(id);

        try {
            const attendance_request = await AttendanceRequestService.getAttendanceRequest(idInt);

            context.body = {
                data: attendance_request,
            };
        }
        catch (e: any) {
            context.status = 401;
            context.body = {
                errors: [
                    e,
                ],
            };
            return;
        }
    }

    public static async addAttendanceRequest(context: Koa.Context) {
        const { body } = context.request;

        if (context.file)
        {
            body.attachment = context.file.location
        }

        try {
            const attendance_request = await AttendanceRequestService.addAttendanceRequest(body);

            context.body = {
                data: attendance_request,
            };
        }
        catch (e: any) {
            context.status = 401;
            context.body = {
                errors: [
                    e,
                ],
            };
            return;
        }
    }

    public static async updateAttendanceRequest(context: Koa.Context) {
        const { id } = context.params;
        const { body } = context.request;

        const idInt = parseInt(id);

        try {
            const attendance_request = await AttendanceRequestService.updateAttendanceRequest(idInt, body);

            context.body = {
                data: attendance_request,
            };
        }
        catch (e: any) {
            context.status = 401;
            context.body = {
                errors: [
                    e,
                ],
            };
            return;
        }
    }

    public static async deleteAttendanceRequest(context: Koa.Context) {
        const { id } = context.params;

        const idInt = parseInt(id);

        try {
            const attendance_request = await AttendanceRequestService.deleteAttendanceRequest(idInt);

            context.body = {
                data: attendance_request,
            };
        }
        catch (e: any) {
            context.status = 401;
            context.body = {
                errors: [
                    e,
                ],
            };
            return;
        }
    }
}