import { Prisma } from '@prisma/client';
import prisma from '../../features/prisma';
import { DefaultArgs } from '@prisma/client/runtime/library';

const starting_points = 100;

export async function getStudent(studentId: number) {
    const student = await prisma.student.findUnique({
        where: {
            id: studentId,
        },
        include: {
            strikes: {
                include: {
                    teacher: true,
                }
            },
            classroom: true,
        },
    });

    if (!student) {
        throw new Error('Student not found');
    }

    return student;
}

export async function getStudents(query: Prisma.StudentFindManyArgs<DefaultArgs> = {}) {
    const students = await prisma.student.findMany(query);

    return students;
}

export async function getStrikes(studentId: number) {
    const student = await prisma.student.findUnique({
        where: {
            id: studentId,
        },
        include: {
            strikes: {
                include: {
                    teacher: true,
                }
            },
            classroom: true,
        },
    });

    return student?.strikes;
}

export async function updateStudent(studentId: number, data: any = {}) {
    const student = await prisma.student.update({
        where: {
            id: studentId,
        },
        data: {
            name: data.name || undefined,
            nis: data.nis || undefined,
            classroom: data.classroomId ? {
                connect: {
                    id: data.classroomId,
                },
            } : undefined,
        },
        include: {
            classroom: true,
        },
    });

    return student;
}

export async function createStudent(userId: number, data: any = {}) {
    var student = await prisma.student.findUnique({
        where: {
            userId: userId,
        },
    });

    if (!student) {
        student = await prisma.student.create({
            data: {
                userId: userId,
                strikes: {
                    create: [
                        {
                            reason: "Siswa GMC",
                        },
                    ],
                },
            },
        });

        student = await prisma.student.update({
            where: {
                id: student.id,
            },
            data: {
                points: {
                    increment: starting_points,
                },
            },
        });

        student = await updateStudent(student.id, data);
    }

    return student;
}