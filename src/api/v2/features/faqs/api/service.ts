import prisma from '@/services/database';

export class FaqService {
    static async getMany(query: any = {}) {
        return prisma.faq.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.faq.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.faq.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.faq.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.faq.delete({
            where: {
                id: id,
            },
        });
    }
}