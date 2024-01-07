import prisma from '@/services/database';

export class ClassSubjectService {
    static async getMany(query: any = {}) {
        return prisma.class_subject.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.class_subject.create({
            data: entry,
        });
    }
    
    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.class_subject.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.class_subject.update({
            where: {
                id: id,
            },
            data: {
                schedules: {
                    set: data.schedules,
                },
            },
        });
    }

    static async deleteOne(id: number) {
        return prisma.class_subject.delete({
            where: {
                id: id,
            },
        });
    }
}