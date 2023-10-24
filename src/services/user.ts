import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getUser(userId: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    return user;
}

export { getUser };