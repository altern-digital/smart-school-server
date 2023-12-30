import Koa from "koa";

import * as service from "./service";

export async function getStudents(context: Koa.Context) {
    var { name, limit, offset } = context.request.query;
    const students = await service.getStudents({
        where: {
            name: {
                contains: name ? name.toString() : undefined,
            },
        },
        include: {
            class: true,
            strikes: {
                orderBy: {
                    date: "desc",
                },
            },
        },
        take: limit ? parseInt(limit.toString()) : 20,
        skip: offset ? parseInt(offset.toString()) : 0,
    });

    context.body = {
        data: students
    };

    try {
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

export async function getStudent(context: Koa.Context) {
    const { studentId } = context.params;

    const studentIdInt = parseInt(studentId);

    try {
        const student = await service.getStudent(studentIdInt);

        context.body = {
            data: student,
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
    const { studentId } = context.params;

    const studentIdInt = parseInt(studentId);

    try {
        const strikes = await service.getStrikes(studentIdInt);

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

export async function updateStudent(context: Koa.Context) {
    const { studentId } = context.params;
    const { data } = context.request.body;

    const studentIdInt = parseInt(studentId);

    try {
        const student = await service.updateStudent(studentIdInt, data);

        context.body = {
            data: student,
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

export async function getAttendance(context: Koa.Context) {
    const { studentId } = context.params;

    const studentIdInt = parseInt(studentId);

    try {
        const attendance = await service.getAttendance(studentIdInt);

        context.body = {
            data: attendance,
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

export async function getAttendanceById(context: Koa.Context) {
    const { studentId, id } = context.params;

    const studentIdInt = parseInt(studentId);
    const idInt = parseInt(id);

    try {
        const attendance = await service.getAttendanceById(studentIdInt, idInt);

        context.body = {
            data: attendance,
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

export async function getFees(context: Koa.Context) {
    const { studentId } = context.params;

    const studentIdInt = parseInt(studentId);

    try {
        const fees = await service.getFees(studentIdInt);

        context.body = {
            data: fees,
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

export async function getFeeById(context: Koa.Context) {
    const { studentId, id } = context.params;

    const studentIdInt = parseInt(studentId);
    const idInt = parseInt(id);

    try {
        const fee = await service.getFeeById(idInt);

        context.body = {
            data: fee,
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