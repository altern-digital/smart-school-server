import prisma from '@/services/database';

export class StudentService {
    static async getMany(query: any = {}) {
        return prisma.student.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.student.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.student.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.student.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.student.delete({
            where: {
                id: id,
            },
        });
    }
}