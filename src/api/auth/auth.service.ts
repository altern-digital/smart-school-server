import prisma from '../../features/prisma/prisma';

import { createProfile, getProfile } from '../profiles/profile.service';

export async function loginUser(identifier: string, password: string) {
    const user = await prisma.user.findUnique({
        where: {
            identifier: identifier,
            password: password,
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

export async function userMe(userId: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    return user;
}