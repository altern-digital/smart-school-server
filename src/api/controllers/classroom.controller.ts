import Koa from 'koa';

import * as classroomService from "../services/classroom.service";

export async function getClassrooms(context : Koa.Context) {
    try {
        const classrooms = await classroomService.getClassroms();

        // res.json({
        //     "data": [...classrooms],
        // });
        context.body = {
            "data": [...classrooms],
        }
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            error: {
                message: e
            }
        };
        return;
    }
}