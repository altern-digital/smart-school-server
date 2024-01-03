import { user_type } from "@prisma/client";
import prisma from "../../../features/prisma";
import { log } from 'console';

export async function loginUser(identifier: string, password: string) {
    const user = await prisma.user.findUnique({
        where: {
            identifier: identifier,
            password: password,
        },
        include: {
            roles: true,
        },
    });

    return user;
}

export async function userMe(userId: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            roles: true,
        },
    });
    
    return user;
}

export async function getProfile(userId: number) {

    log(userId);

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            type: true,
        },
    });

    var profile;

    switch (user?.type) {
        case user_type.student:
            profile = await prisma.student.findUnique({
                where: {
                    user_id: userId,
                },
                include: {
                    strikes: {
                        include: {
                            students: true,
                            teacher: true,
                        }
                    },
                    class: true,
                },
            });
            break;
        case user_type.teacher:
            profile = await prisma.teacher.findUnique({
                where: {
                    user_id: userId,
                },
                include: {
                    strikes: {
                        include: {
                            students: true,
                            teacher: true,
                        }
                    },
                },
            });
            break;
        case user_type.parent:
            profile = await prisma.parent.findUnique({
                where: {
                    user_id: userId,
                },
                include: {
                    student: true,
                }
            });
            break;
        default:
            break;
    }

    return profile;
}