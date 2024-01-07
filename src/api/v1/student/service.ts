import { Prisma } from "@prisma/client";
import prisma from "../../../services/database";
import { DefaultArgs } from "@prisma/client/runtime/library";

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
            class: true,
        },
    });

    if (!student) {
        throw new Error("Student not found");
    }

    return student;
}

export async function getStudents(query: Prisma.studentFindManyArgs<DefaultArgs> = {}) {
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
            class: true,
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
            class: data.classId ? {
                connect: {
                    id: data.classId,
                },
            } : undefined,
        },
        include: {
            class: true,
        },
    });

    return student;
}

export async function createStudent(userId: number, data: any = {}) {
    var student = await prisma.student.findUnique({
        where: {
            user_id: userId,
        },
    });

    if (!student) {
        student = await prisma.student.create({
            data: {
                user_id: userId,
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

export async function getAttendance(studentId: number) {
    const student = await prisma.student.findUnique({
        where: {
            id: studentId,
        },
        include: {
            attendances: true,
        },
    });

    return student?.attendances;
}

export async function getAttendanceById(studentId: number, attendanceId: number) {
    const attendance = await prisma.student_attendance.findUnique({
        where: {
            id: attendanceId,
        },
    });

    return attendance;
}

export async function getFees(studentId: number) {
    const fees = await prisma.student_fee.findMany({
        where: {
            student_id: studentId,
        },
    });

    return fees;
}

export async function getFeeById(feeId: number) {
    const fee = await prisma.student_fee.findUnique({
        where: {
            id: feeId,
        },
    });

    return fee;
}