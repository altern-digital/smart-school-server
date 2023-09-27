import { Express } from "express";

import teacherService from "../services/teacher.service";

async function get(req: any, res: any, next: any) {
    try {
        const teachers = await teacherService.get();
        res.send({
            "data":
                teachers
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function getOne(req: any, res: any, next: any) {
    try {
        const teacherId = parseInt(req.params.id);
        const teacher = await teacherService.getOne(teacherId);
        res.send({
            "data":
                teacher
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function create(req: any, res: any, next: any) {
    try {
        const teacher = await teacherService.create(req.body);
        res.send({
            "data":
                teacher
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function update(req: any, res: any, next: any) {
    try {
        const teacherId = parseInt(req.params.id);
        const teacher = await teacherService.update(teacherId, req.body);
        res.send({
            "data":
                teacher
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function remove(req: any, res: any, next: any) {
    try {
        const teacherId = parseInt(req.params.id);
        const teacher = await teacherService.remove(teacherId);
        res.send({
            "data":
                teacher
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function login(req: any, res: any, next: any) {
    try {
        const teacher = await teacherService.login(req.body.username, req.body.password);
        res.send({
            "data":
                teacher
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function sendStrike(req: any, res: any, next: any) {
    try {
        const teacherId = parseInt(req.params.id);
        const points = parseInt(req.body.points);
        const studentIds = req.body.studentIds;
        const teacher = await teacherService.sendStrike(teacherId, points, studentIds);
        res.send({
            "data":
                teacher
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

export default {
    get,
    getOne,
    create,
    update,
    remove,
    login,
    sendStrike
}