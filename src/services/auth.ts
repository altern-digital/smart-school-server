import { PrismaClient } from '@prisma/client'
import { createProfile } from './profile';
const prisma = new PrismaClient()

async function loginUser(identifier: string, password: string) {
    const user = await prisma.user.findUnique({
        where: {
            identifier: identifier,
            password: password,
        },
    });

    return user;
}

async function registerUser(identifier: string, password: string, role: string, data: any = {}) {
    var user = await prisma.user.findUnique({
        where: {
            identifier: identifier,
        },
    });

    if (!user) {
        user = await prisma.user.create({
            data: {
                identifier,
                password,
                role,
            },
        });
    }
    else {
        throw new Error('User already exists');
    }

    var profile = await createProfile(user.id, role, data);

    return {
        "user": {
            "id": user.id,
            "role": user.role
        },
        profile,
    };
}

async function userMe(userId: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    return user;
}

export { loginUser, userMe, registerUser };