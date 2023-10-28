import { Request, Response } from "express";

import * as classroomService from "./classroom.service";

export async function getClassrooms(req: Request, res: Response) {
    try {
        const classrooms = await classroomService.getClassroms();

        res.json({
            "data": [...classrooms],
        });
    }
    catch (e: any) {
        res.status(401).json({
            error: {
                message: e.message
            }
        });
        return;
    }
}