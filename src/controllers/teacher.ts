import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

import * as teacherService from "../services/teacher";

async function getTeachers(req: Request, res: Response) {
    try {
        const teachers = await teacherService.getTeachers();

        res.json({
            "data": [...teachers],
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

async function getTeacher(req: Request, res: Response) {
    const { teacherId } = req.params;

    const teacherIdInt = parseInt(teacherId);

    try {
        const teacher = await teacherService.getTeacher(teacherIdInt);

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

async function sendStrike(req: Request, res: Response) {
    const { teacherId } = req.params;
    const { data } = req.body;

    const teacherIdInt = parseInt(teacherId);

    try {
        const strikes = await teacherService.sendStrikes(
            teacherIdInt,
            parseInt(data.points),
            data.reason,
            data.studentIds,
        );

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

async function getStrikes(req: Request, res: Response) {
    const { teacherId } = req.params;

    const teacherIdInt = parseInt(teacherId);

    try {
        const strikes = await teacherService.getStrikes(teacherIdInt);

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

async function updateTeacher(req: Request, res: Response) {
    const { teacherId } = req.params;
    const { data } = req.body;

    const teacherIdInt = parseInt(teacherId);

    try {
        const teacher = await teacherService.updateTeacher(teacherIdInt, data);

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

export { getTeachers, getTeacher, sendStrike as sendStrikes, getStrikes, updateTeacher };