import prisma from '@/services/database';

export class StudentAttendanceRequestService {
    static async getMany(query: any = {}) {
        return prisma.student_attendance_permission_request.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.student_attendance_permission_request.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.student_attendance_permission_request.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.student_attendance_permission_request.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.student_attendance_permission_request.delete({
            where: {
                id: id,
            },
        });
    }
}