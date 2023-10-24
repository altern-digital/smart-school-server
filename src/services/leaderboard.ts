import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getStudentLeaderboard(classroomName: string) {
    const students = await prisma.student.findMany({
        where: {
            classroom: {
                name: {
                    contains: classroomName,
                },
            },
        },
        orderBy: {
            points: 'desc',
        },
    });

    return students;
}

export { getStudentLeaderboard };