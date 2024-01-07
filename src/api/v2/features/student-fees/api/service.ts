import prisma from '@/services/database';

export class StudentFeeService {
    static async getMany(query: any = {}) {
        return prisma.student_fee.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.student_fee.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.student_fee.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.student_fee.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.student_fee.delete({
            where: {
                id: id,
            },
        });
    }
}