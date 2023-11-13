import { Prisma } from '@prisma/client';
import prisma from '../../features/prisma';
import { DefaultArgs } from '@prisma/client/runtime/library';

export async function getTeacher(teacherId: number) {
    const teacher = await prisma.teacher.findUnique({
        where: {
            id: teacherId,
        },
        include: {
            studentStrikes: {
                include: {
                    students: true,
                },
            },
            classroom: true,
        }
    });

    if (!teacher) {
        throw new Error('Teacher not found');
    }

    return teacher;
}

export async function getTeachers(query: Prisma.TeacherFindManyArgs<DefaultArgs> = {}) {
    const teachers = await prisma.teacher.findMany(query);

    return teachers;
}

export async function sendStrikes(teacherId: number, amount: number, reason: string, students: any) {
    const strike = await prisma.studentStrike.create({
        data: {
            reason,
            teacherId,
            amount: amount,
            students: {
                connect: students.map((student: any) => {
                    return {
                        id: student.id,
                    };
                }
                ),
            },
        },
    });

    await prisma.student.updateMany({
        where: {
            id: {
                in: students.map((student: any) => {
                    return student.id;
                }),
            },
        },
        data: {
            points: {
                increment: amount,
            },
        },
    });

    return strike;
}

export async function getStrikes(teacherId: number) {
    const teacher = await prisma.teacher.findUnique({
        where: {
            id: teacherId,
        },
        include: {
            studentStrikes: true,
        },
    });

    return teacher?.studentStrikes;
}

export async function updateTeacher(teacherId: number, data: any = {}) {
    const teacher = await prisma.teacher.update({
        where: {
            id: teacherId,
        },
        data: {
            name: data.name || undefined,
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

    return teacher;
}

export async function createTeacher(userId: number, data: any = {}) {
    var teacher = await prisma.teacher.findUnique({
        where: {
            userId: userId,
        },
    });

    if (!teacher) {
        teacher = await prisma.teacher.create({
            data: {
                userId: userId,
            },
        });

        teacher = await updateTeacher(teacher.id, data);
    }

    return teacher;
}