import prisma from '@/services/database';
import { log } from 'console';

export class StudentPointService {
    static async getMany(query: any = {}) {
        return prisma.student_point.findMany(query);
    }

    static async createOne(entry: any) {
        return prisma.student_point.create({
            data: entry,
        });
    }

    static async getOne(id: number, query: any = {}) {
        query.where = {
            id: id,
        };

        return prisma.student_point.findUnique(query);
    }

    static async updateOne(id: number, data: any) {
        return prisma.student_point.update({
            where: {
                id: id,
            },
            data: data,
        });
    }

    static async deleteOne(id: number) {
        return prisma.student_point.delete({
            where: {
                id: id,
            },
        });
    }
}