import prisma from '@/services/database';

export class CalendarEventService {
    static async getMany(query: any = {}) {
        return prisma.calendar_event.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.calendar_event.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.calendar_event.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.calendar_event.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.calendar_event.delete({
            where: {
                id: id,
            },
        });
    }
}