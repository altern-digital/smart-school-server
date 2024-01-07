import Koa from "koa";

import * as service from "./service";
import { log } from "console";

export async function getTeachers(context: Koa.Context) {
    try {
        var { name, limit, offset } = context.request.query;

        const teachers = await service.getTeachers({
            where: {
                name: {
                    contains: name ? name.toString() : undefined,
                },
            },
            include: {
                strikes: true,
            },
            take: limit ? parseInt(limit.toString()) : 20,
            skip: offset ? parseInt(offset.toString()) : 0,
        });

        context.body = {
            data: teachers,
        };
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e,
            ],
        };
        return;
    }
}

export async function getTeacher(context: Koa.Context) {
    const { id } = context.params;

    const idInt = parseInt(id);

    try {
        const teacher = await service.getTeacher(idInt);

        context.body = {
            data: teacher,
        };
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e,
            ],
        };
        return;
    }
}

export async function sendStudentStrike(context: Koa.Context) {
    const { id } = context.params;
    const { amount, description, reason, students } = context.request.body;

    const idInt = parseInt(id);


    try {
        const strikes = await service.sendStrikes(
            idInt,
            parseInt(amount),
            reason,
            description,
            students,
        );

        context.body = {
            data: strikes
        };
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e,
            ],
        };
        return;
    }
}

export async function getStrikes(context: Koa.Context) {
    const { id } = context.params;

    const idInt = parseInt(id);

    try {
        const strikes = await service.getStrikes(idInt);

        context.body = {
            data: strikes,
        }
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e,
            ],
        };
        return;
    }
}

export async function updateTeacher(context: Koa.Context) {
    const { id } = context.params;
    const { data } = context.request.body;

    const idInt = parseInt(id);

    try {
        const teacher = await service.updateTeacher(idInt, data);

        context.body = {
            data: teacher,
        };
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e,
            ],
        };
        return;
    }
}

export async function getTeacherSchedules(context: Koa.Context) {
    const { id } = context.params;

    const idInt = parseInt(id);

    try {
        const schedules = await service.getSchedules(idInt);

        context.body = {
            data: schedules,
        };
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e,
            ],
        };
    }
}