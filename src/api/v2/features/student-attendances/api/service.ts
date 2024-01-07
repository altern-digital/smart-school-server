import prisma from '@/services/database';

export class StudentAttendanceService {
    static async getMany(query: any = {}) {
        return prisma.student_attendance.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.student_attendance.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.student_attendance.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.student_attendance.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.student_attendance.delete({
            where: {
                id: id,
            },
        });
    }
}