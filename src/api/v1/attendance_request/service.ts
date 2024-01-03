import { student_attendance_permission_status, student_attendance_type } from "@prisma/client";
import prisma from "../../../features/prisma";
import { log } from 'console';

export class AttendanceRequestService
{
    public static async getAll(status: student_attendance_permission_status = undefined, student_id: number = undefined) {
        const attendance_requests = await prisma.student_attendance_permission_request.findMany(
            {
                where: {
                    status: status,
                    student_id: student_id,
                },
            }
        );

        return attendance_requests;
    }

    public static async getAttendanceRequest(id: number) {
        const attendance_request = await prisma.student_attendance_permission_request.findUnique({
            where: {
                id: id,
            },
        });

        return attendance_request;
    }

    public static async addAttendanceRequest(data: any) {
        const attendance_request = await prisma.student_attendance_permission_request.create({
            data: {
                student_id: data.student_id ? parseInt(data.student_id) : undefined,
                attachment: data.attachment || undefined,
                type: data.type || undefined,
                description: data.description || undefined,
            },
        }).catch((e) => {
            log(e);
        }
        );

        return attendance_request;
    }

    public static async updateAttendanceRequest(id: number, data: any) {

        const attendance_request = await prisma.student_attendance_permission_request.update({
            where: {
                id: id,
            },
            data: {
                status: data.status || undefined,
            },
        });


        return attendance_request;
    }

    public static async deleteAttendanceRequest(id: number) {
        const attendance_request = await prisma.student_attendance_permission_request.delete({
            where: {
                id: id,
            },
        });

        return attendance_request;
    }
}