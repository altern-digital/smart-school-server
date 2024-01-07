import prisma from '@/services/database';

export class ClassScheduleService {
    static async getMany(query: any = {}) {
        return prisma.class_schedule.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.class_schedule.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.class_schedule.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.class_schedule.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.class_schedule.delete({
            where: {
                id: id,
            },
        });
    }
}