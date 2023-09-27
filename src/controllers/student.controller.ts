import { Express } from "express";

import studentService from "../services/student.service";

async function get(req: any, res: any, next: any) {
    try {
        const students = await studentService.get();
        res.send(students);
    } catch (error) {
        next(error);
    }
}

async function getOne(req: any, res: any, next: any) {
    try {
        const student = await studentService.getOne(req.params.id);
        res.send(student);
    } catch (error) {
        next(error);
    }
}

async function create(req: any, res: any, next: any) {
    try {
        const student = await studentService.create(req.body);
        res.send(student);
    } catch (error) {
        next(error);
    }
}

async function update(req: any, res: any, next: any) {
    try {
        const student = await studentService.update(req.params.id, req.body);
        res.send(student);
    } catch (error) {
        next(error);
    }
}

async function remove(req: any, res: any, next: any) {
    try {
        const student = await studentService.remove(req.params.id);
        res.send(student);
    } catch (error) {
        next(error);
    }
}

export default {
    get,
    getOne,
    create,
    update,
    remove
}