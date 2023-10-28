import prisma from '../../features/prisma/prisma';

export async function getClassroms() {
    const classrooms = await prisma.classroom.findMany();
    return classrooms;
}