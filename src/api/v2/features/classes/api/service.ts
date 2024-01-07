import prisma from '@/services/database';

export class ClassService {
    static async getMany(query: any = {}) {
        return prisma.class.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.class.create({
            data: entry,
        });
    }
    
    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.class.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.class.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.class.delete({
            where: {
                id: id,
            },
        });
    }
}