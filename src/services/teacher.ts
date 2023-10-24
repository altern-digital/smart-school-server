import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getTeacher(teacherId: number) {
    const teacher = await prisma.teacher.findUnique({
        where: {
            id: teacherId,
        },
        include: {
            StudentStrikes: true,
        }
    });

    if (!teacher) {
        throw new Error('Teacher not found');
    }

    return teacher;
}

async function getTeachers() {
    const teachers = await prisma.teacher.findMany();

    return teachers;
}

async function sendStrikes(teacherId: number, points: number, reason: string, studentIds: number[]) {
    const strike = await prisma.studentStrike.create({
        data: {
            reason,
            teacherId,
            points,
            Students: {
                connect: studentIds.map((id) => {
                    return {
                        id,
                    };
                }),
            },
        },
    });

    await prisma.student.updateMany({
        where: {
            id: {
                in: studentIds,
            },
        },
        data: {
            points: {
                increment: points,
            },
        },
    });

    return strike;
}

async function getStrikes(teacherId: number) {
    const teacher = await prisma.teacher.findUnique({
        where: {
            id: teacherId,
        },
        include: {
            StudentStrikes: true,
        },
    });

    return teacher?.StudentStrikes;
}

async function updateTeacher(teacherId: number, data: any) {
    const teacher = await prisma.teacher.update({
        where: {
            id: teacherId,
        },
        data: {
            "name": data.name,
            "identifier": data.nis,
            "classroomId": data.classroomId,
        },
        include: {
            StudentStrikes: true,
        },
    });

    return teacher;
}

async function createTeacher(userId: number) {
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
    }

    return teacher;
}

export { getTeacher, getTeachers, sendStrikes, getStrikes, updateTeacher, createTeacher };