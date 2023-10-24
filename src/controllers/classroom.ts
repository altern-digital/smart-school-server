import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import * as classroomService from "../services/classroom";

async function getClassrooms(req: Request, res: Response) {
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

export { getClassrooms };