import { Express } from "express";

import studentService from "../services/student.service";

async function get(req: any, res: any, next: any) {
    try {
        let students = await studentService.get();

        res.send({
            "data":
                students
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function getOne(req: any, res: any, next: any) {
    try {
        const studentId = parseInt(req.params.id);
        const student = await studentService.getOne(studentId);

        res.send({
            "data":
                student
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function create(req: any, res: any, next: any) {
    try {
        const student = await studentService.create(req.body);
        res.send({
            "data":
                student
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function update(req: any, res: any, next: any) {
    try {
        const studentId = parseInt(req.params.id);
        const student = await studentService.update(studentId, req.body);
        res.send({
            "data":
                student
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function remove(req: any, res: any, next: any) {
    try {
        const studentId = parseInt(req.params.id);
        const student = await studentService.remove(studentId);
        res.send({
            "data":
                student
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function login(req: any, res: any, next: any) {
    try {
        const student = await studentService.login(req.body.username, req.body.password);
        res.send({
            "data":
                student
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
    login
}