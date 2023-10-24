import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import * as studentService from './student';
import * as teacherService from './teacher';

async function getProfile(userId: number, role: string) {
    var profile;

    switch (role) {
        case 'STUDENT':
            profile = await prisma.student.findUnique({
                where: {
                    userId: userId,
                },
            });
            break;

        case 'TEACHER':
            profile = await prisma.teacher.findUnique({
                where: {
                    userId: userId,
                },
            });
            break;

        default:
            break;
    }

    return profile;
}

async function createProfile(userId: number, role: string, data: any = {}) {
    var profile;

    switch (role) {
        case 'STUDENT':
            profile = studentService.createStudent(userId, data);

            break;

        case 'TEACHER':
            profile = teacherService.createTeacher(userId, data);
            break;

        default:
            break;
    }

    return profile;
}

async function updateProfile(profileId: number, role: string, data: any = {}) {
    var profile;

    switch (role) {
        case 'STUDENT':
            profile = await studentService.updateStudent(profileId, data);
            break;

        case 'TEACHER':
            profile = await teacherService.updateTeacher(profileId, data);
            break;

        default:
            break;
    }

    return profile;
}

export { getProfile, createProfile, updateProfile };