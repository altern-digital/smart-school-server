import prisma from '../../features/prisma';

export async function getStudentLeaderboard(classroomName: string) {
    const students = await prisma.student.findMany({
        where: {
            classroom: {
                name: {
                    contains: classroomName,
                },
            },
        },
        include: {
            strikes: true,
        },
        orderBy: [
            {
                points: "desc",
            },
            {
                name: "asc",
            },
        ],
    });

    return students;
}