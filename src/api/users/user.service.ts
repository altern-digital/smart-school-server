import prisma from '../../features/prisma/prisma';

export async function getUser(userId: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    return user;
}