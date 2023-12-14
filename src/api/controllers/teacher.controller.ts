import Koa from 'koa';

import * as teacherService from "../services/teacher.service";

export async function getTeachers(context : Koa.Context) {
    try {
        var { name, limit, offset } = context.request.query;

        const teachers = await teacherService.getTeachers({
            where: {
                name: {
                    contains: name ? name.toString() : undefined,
                },
            },
            include: {
                classroom: true,
                studentStrikes: true,
            },
            take: limit ? parseInt(limit.toString()) : 10,
            skip: offset ? parseInt(offset.toString()) : 0,
        });

        context.body = teachers;
    }
    catch (e: any) {
        context.status = 401;
    context.body = {
      error: {
        message: e,
      },
    };
        return;
    }
}

export async function getTeacher(context : Koa.Context) {
    const { id } = context.params;

    const idInt = parseInt(id);

    try {
        const teacher = await teacherService.getTeacher(idInt);

        context.body = teacher;
    }
    catch (e: any) {
        context.status = 401;
    context.body = {
      error: {
        message: e,
      },
    };
        return;
    }
}

export async function sendStudentStrike(context : Koa.Context) {
    const { id } = context.params;
    const { amount, reason, students } = context.request.body;

    const idInt = parseInt(id);


    try {
        const strikes = await teacherService.sendStrikes(
            idInt,
            parseInt(amount),
            reason,
            students,
        );

        context.body = strikes;
    }
    catch (e: any) {
        context.status = 401;
    context.body = {
      error: {
        message: e,
      },
    };
        return;
    }
}

export async function getStrikes(context : Koa.Context) {
    const { id } = context.params;

    const idInt = parseInt(id);

    try {
        const strikes = await teacherService.getStrikes(idInt);

        context.body = {
            "data": strikes,
        }
    }
    catch (e: any) {
        context.status = 401;
    context.body = {
      error: {
        message: e,
      },
    };
        return;
    }
}

export async function updateTeacher(context : Koa.Context) {
    const { id } = context.params;
    const { data } = context.request.body;

    const idInt = parseInt(id);

    try {
        const teacher = await teacherService.updateTeacher(idInt, data);
        
        context.body = {
            "data": teacher,
        };
    }
    catch (e: any) {
        context.status = 401;
    context.body = {
      error: {
        message: e,
      },
    };
        return;
    }
}