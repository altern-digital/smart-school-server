const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // Create teachers
    const teacher1 = await prisma.teacher.create({
        data: {
            username: 'teacher1',
            password: 'teacher1password',
        },
    });

    const teacher2 = await prisma.teacher.create({
        data: {
            username: 'teacher2',
            password: 'teacher2password',
        },
    });

    // Create students
    const student1 = await prisma.student.create({
        data: {
            username: 'student1',
            password: 'student1password',
        },
    });

    const student2 = await prisma.student.create({
        data: {
            username: 'student2',
            password: 'student2password',
        },
    });

    // Create classrooms
    const classroom1 = await prisma.classroom.create({
        data: {
            name: 'Classroom A',
            teacherId: teacher1.id,
        },
    });

    const classroom2 = await prisma.classroom.create({
        data: {
            name: 'Classroom B',
            teacherId: teacher2.id,
        },
    });

    // Create teacher strikes
    const teacherStrike1 = await prisma.teacherStrike.create({
        data: {
            points: 3,
            adminId: 1, // Change this to the ID of the corresponding admin
        },
    });

    const teacherStrike2 = await prisma.teacherStrike.create({
        data: {
            points: 2,
            adminId: 1, // Change this to the ID of the corresponding admin
        },
    });

    // Create student strikes
    const studentStrike1 = await prisma.studentStrike.create({
        data: {
            points: 1,
            teacherId: teacher1.id,
        },
    });

    const studentStrike2 = await prisma.studentStrike.create({
        data: {
            points: 2,
            teacherId: teacher2.id,
        },
    });

    // Update the relationships
    await prisma.teacher.update({
        where: { id: teacher1.id },
        data: {
            strikes: { connect: { id: teacherStrike1.id } },
        },
    });

    await prisma.teacher.update({
        where: { id: teacher2.id },
        data: {
            strikes: { connect: { id: teacherStrike2.id } },
        },
    });

    await prisma.teacher.update({
        where: { id: teacher1.id },
        data: {
            StudentStrikes: { connect: { id: studentStrike1.id } },
        },
    });

    await prisma.teacher.update({
        where: { id: teacher2.id },
        data: {
            StudentStrikes: { connect: { id: studentStrike2.id } },
        },
    });

    await prisma.classroom.update({
        where: { id: classroom1.id },
        data: {
            students: { connect: [{ id: student1.id }, { id: student2.id }] },
        },
    });

    await prisma.classroom.update({
        where: { id: classroom2.id },
        data: {
            students: { connect: [{ id: student1.id }, { id: student2.id }] },
        },
    });
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
