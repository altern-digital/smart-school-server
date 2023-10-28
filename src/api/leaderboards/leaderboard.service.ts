import prisma from '../../features/prisma/prisma';

export async function getStudentLeaderboard(classroomName: string) {
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