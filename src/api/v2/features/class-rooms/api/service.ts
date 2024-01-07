import prisma from '@/services/database';

export class ClassRoomService {
    static async getMany(query: any = {}) {
        return prisma.class_room.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.class_room.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.class_room.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.class_room.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.class_room.delete({
            where: {
                id: id,
            },
        });
    }
}