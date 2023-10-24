import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getClassroms() {
    const classrooms = await prisma.classroom.findMany();
    return classrooms;
}

export { getClassroms };