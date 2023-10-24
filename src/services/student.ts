import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const starting_points = 100;

async function getStudent(studentId: number) {
    const student = await prisma.student.findUnique({
        where: {
            id: studentId,
        },
        include: {
            Strikes: true,
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
            Strikes: true,
        },
    });

    return student?.Strikes;
}

async function updateStudent(studentId: number, data: any) {
    const student = await prisma.student.update({
        where: {
            id: studentId,
        },
        data: {
            "name": data.name,
            "nis": data.nis,
            "identifier": data.nis,
            "classroomId": data.classroomId,
        },
        include: {
            Strikes: true,
        },
    });

    return student;
}

async function createStudent(userId: number) {
    var student = await prisma.student.findUnique({
        where: {
            userId: userId,
        },
    });

    if (!student) {
        student = await prisma.student.create({
            data: {
                userId: userId,
                Strikes: {
                    create: [
                        {
                            reason: "Siswa GMC",
                            points: starting_points,
                        },
                    ],
                },
            },
        });

        await prisma.student.update({
            where: {
                id: student.id,
            },
            data: {
                points: {
                    increment: starting_points,
                },
            },
        });
    }

    return student;
}

export { getStudent, getStudents, getStrikes, updateStudent, createStudent };