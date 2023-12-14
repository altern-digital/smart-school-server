import Koa from 'koa';

import * as studentService from "../services/student.service";

export async function getStudents(context : Koa.Context) {
    var { name, limit, offset } = context.request.query;
    const students = await studentService.getStudents({
        where: {
            name: {
                contains: name ? name.toString() : undefined,
            },
        },
        include: {
            classroom: true,
            strikes: {
                orderBy: {
                    date: "desc",
                },
            },
        },
        take: limit ? parseInt(limit.toString()) : 10,
        skip: offset ? parseInt(offset.toString()) : 0,
    });

    context.body = students;

    try {
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

export async function getStudent(context : Koa.Context) {
    const { studentId } = context.params;

    const studentIdInt = parseInt(studentId);

    try {
        const student = await studentService.getStudent(studentIdInt);

        context.body = student;
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
    const { studentId } = context.params;

    const studentIdInt = parseInt(studentId);

    try {
        const strikes = await studentService.getStrikes(studentIdInt);

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

export async function updateStudent(context : Koa.Context) {
    const { studentId } = context.params;
    const { data } = context.request.body;

    const studentIdInt = parseInt(studentId);

    try {
        const student = await studentService.updateStudent(studentIdInt, data);

        context.body = {
            "data": student,
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