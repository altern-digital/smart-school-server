import prisma from '@/services/database';

export class StudentPointTypeService {
    static async getMany(query: any = {}) {
        return prisma.student_point_type.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.student_point_type.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.student_point_type.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.student_point_type.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.student_point_type.delete({
            where: {
                id: id,
            },
        });
    }
}