import prisma from '@/services/database';

export class FeedbackService {
    static async getMany(query: any = {}) {
        return prisma.app_feedback.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.app_feedback.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.app_feedback.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.app_feedback.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.app_feedback.delete({
            where: {
                id: id,
            },
        });
    }
}