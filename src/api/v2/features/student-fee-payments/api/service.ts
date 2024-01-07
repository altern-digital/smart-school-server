import prisma from '@/services/database';

export class StudentFeePaymentService {
    static async getMany(query: any = {}) {
        return prisma.student_fee_payment.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.student_fee_payment.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.student_fee_payment.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.student_fee_payment.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.student_fee_payment.delete({
            where: {
                id: id,
            },
        });
    }
}