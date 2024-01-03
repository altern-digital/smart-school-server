import Koa from "koa";

import * as service from "./service";

export async function getStudents(context: Koa.Context) {
    var { name } = context.request.query;
    const students = await service.getStudents({
        where: {
            name: {
                contains: name ? name.toString() : undefined,
            },
        },
        include: {
            fees: {
                include: {
                    payments: true,
                }
            },
        },
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
    const { id } = context.params;

    const idInt = parseInt(id);

    try {
        const student = await service.getStudent({
            where: {
                id: idInt,
            },
            include: {
                class: true,
                fees: true,
            },
        });

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