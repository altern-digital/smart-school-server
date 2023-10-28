import prisma from '../../features/prisma/prisma';

import * as studentService from '../students/student.service';
import * as teacherService from '../teachers/teacher.service';

export async function getProfile(userId: number, role: string) {
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

export async function createProfile(userId: number, role: string, data: any = {}) {
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

export async function updateProfile(profileId: number, role: string, data: any = {}) {
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