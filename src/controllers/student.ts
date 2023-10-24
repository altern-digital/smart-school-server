import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

import * as studentService from "../services/student";

async function getStudents(req: Request, res: Response) {
    try {
        const students = await studentService.getStudents();

        res.json({
            "data": [...students],
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

async function getStudent(req: Request, res: Response) {
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

async function getStrikes(req: Request, res: Response) {
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

async function updateStudent(req: Request, res: Response) {
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

export { getStudents, getStudent, getStrikes, updateStudent };