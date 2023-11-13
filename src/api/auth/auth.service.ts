import prisma from '../../features/prisma';

export async function loginUser(identifier: string, password: string) {
    const user = await prisma.user.findUnique({
        where: {
            identifier: identifier,
            password: password,
        },
        include: {
            role: true,
        },
    });

    return user;
}

export async function registerUser(identifier: string, password: string, role: string, data: any = {}) {
    var user = await prisma.user.findUnique({
        where: {
            identifier: identifier,
        },
    });
}

export async function userMe(userId: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            role: true,
        },
    });

    return user;
}