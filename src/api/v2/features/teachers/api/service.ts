import prisma from '@/services/database';

export class TeacherService {
    static async getMany(query: any = {}) {
        return prisma.teacher.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.teacher.create({
            data: entry,
        });
    }
    
    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.teacher.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.teacher.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.teacher.delete({
            where: {
                id: id,
            },
        });
    }
}