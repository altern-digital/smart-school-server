import Koa from "koa";

import * as service from "./service";

export async function getclasss(context : Koa.Context) {
    try {
        const classs = await service.getClassroms();

        context.body = {
            data: classs,
        }
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e,
            ]
        };
        return;
    }
}

export async function getclass(context : Koa.Context) {
    const { id } = context.params;

    const idInt = parseInt(id);

    try {
        const class_ = await service.getclass(idInt);

        context.body = {
            data: class_,
        }
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e,
            ]
        };
        return;
    }
}

export async function getclassSchedules(context : Koa.Context) {
    const { id } = context.params;

    const idInt = parseInt(id);

    try {
        const schedules = await service.getclassSchedules(idInt);

        context.body = {
            data: schedules,
        }
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e,
            ]
        };
        return;
    }
}