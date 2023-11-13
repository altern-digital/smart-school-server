import { Request, Response } from "express";

import * as teacherService from "./teacher.service";

export async function getTeachers(req: Request, res: Response) {
    try {
        var { name, limit, offset } = req.query;

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

        res.json(teachers);
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

export async function getTeacher(req: Request, res: Response) {
    const { id } = req.params;

    const idInt = parseInt(id);

    try {
        const teacher = await teacherService.getTeacher(idInt);

        res.json(teacher);
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

export async function sendStudentStrike(req: Request, res: Response) {
    const { id } = req.params;
    const { amount, reason, students } = req.body;

    const idInt = parseInt(id);


    try {
        const strikes = await teacherService.sendStrikes(
            idInt,
            parseInt(amount),
            reason,
            students,
        );

        res.json(strikes);
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

export async function getStrikes(req: Request, res: Response) {
    const { id } = req.params;

    const idInt = parseInt(id);

    try {
        const strikes = await teacherService.getStrikes(idInt);

        res.json({
            "data": strikes,
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

export async function updateTeacher(req: Request, res: Response) {
    const { id } = req.params;
    const { data } = req.body;

    const idInt = parseInt(id);

    try {
        const teacher = await teacherService.updateTeacher(idInt, data);

        res.json({
            "data": teacher,
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