import prisma from '../../features/prisma';

export async function getClassroms() {
    const classrooms = await prisma.classroom.findMany();
    return classrooms;
}