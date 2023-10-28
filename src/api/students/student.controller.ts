import { Request, Response } from "express";

import * as studentService from "./student.service";

export async function getStudents(req: Request, res: Response) {
    var { name, limit, offset } = req.query;

    const students = await studentService.getStudents({
        where: {
            name: {
                contains: name ? name.toString() : undefined,
            },
        },
        include: {
            classroom: true,
        },
        take: limit ? parseInt(limit.toString()) : undefined,
        skip: offset ? parseInt(offset.toString()) : undefined,
    });

    res.json({
        "data": [...students],
    });
    try {
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

export async function getStudent(req: Request, res: Response) {
    const { studentId } = req.params;

    const studentIdInt = parseInt(studentId);

    try {
        const student = await studentService.getStudent(studentIdInt);

        res.json({
            "data": student,
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

export async function getStrikes(req: Request, res: Response) {
    const { studentId } = req.params;

    const studentIdInt = parseInt(studentId);

    try {
        const strikes = await studentService.getStrikes(studentIdInt);

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

export async function updateStudent(req: Request, res: Response) {
    const { studentId } = req.params;
    const { data } = req.body;

    const studentIdInt = parseInt(studentId);

    try {
        const student = await studentService.updateStudent(studentIdInt, data);

        res.json({
            "data": student,
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