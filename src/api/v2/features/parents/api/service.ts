import prisma from '@/services/database';

export class ParentService {
    static async getMany(query: any = {}) {
        return prisma.parent.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.parent.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.parent.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.parent.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.parent.delete({
            where: {
                id: id,
            },
        });
    }
}