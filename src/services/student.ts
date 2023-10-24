import { PrismaClient } from '@prisma/client'
import { log } from 'console';
const prisma = new PrismaClient()

const starting_points = 100;

async function getStudent(studentId: number) {
    const student = await prisma.student.findUnique({
        where: {
            id: studentId,
        },
        include: {
            strikes: true,
            classroom: true,
        },
    });

    if (!student) {
        throw new Error('Student not found');
    }

    return student;
}

async function getStudents() {
    const students = await prisma.student.findMany();

    return students;
}

async function getStrikes(studentId: number) {
    const student = await prisma.student.findUnique({
        where: {
            id: studentId,
        },
        include: {
            strikes: true,
            classroom: true,
        },
    });

    return student?.strikes;
}

async function updateStudent(studentId: number, data: any = {}) {
    const student = await prisma.student.update({
        where: {
            id: studentId,
        },
        data: {
            name: data.name || undefined,
            nis: data.nis || undefined,
            identifier: data.nis || undefined,
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

async function createStudent(userId: number, data: any = {}) {
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
                            points: starting_points,
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

export { getStudent, getStudents, getStrikes, updateStudent, createStudent };