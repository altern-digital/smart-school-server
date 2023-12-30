import Koa from "koa";

import * as service from "./service";

export async function getAcademicCalendars(context : Koa.Context) {
    try {
        const academicCalendars = await service.getAcademicCalendars();

        context.body = {
            data: academicCalendars,
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