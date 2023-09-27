import { Express } from "express";

import adminService from "../services/admin.service";

async function get(req: any, res: any, next: any) {
    try {
        const admins = await adminService.get();
        res.send({
            "data":
                admins
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function getOne(req: any, res: any, next: any) {
    try {
        const adminId = parseInt(req.params.id);
        const admin = await adminService.getOne(adminId);
        res.send({
            "data":
                admin
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function create(req: any, res: any, next: any) {
    try {
        const admin = await adminService.create(req.body);
        res.send({
            "data":
                admin
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function update(req: any, res: any, next: any) {
    try {
        const adminId = parseInt(req.params.id);
        const admin = await adminService.update(adminId, req.body);
        res.send({
            "data":
                admin
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function remove(req: any, res: any, next: any) {
    try {
        const adminId = parseInt(req.params.id);
        const admin = await adminService.remove(adminId);
        res.send({
            "data":
                admin
        });
    } catch (error) {
        res.send((error as any).message)
    }
}

async function login(req: any, res: any, next: any) {
    try {
        const admin = await adminService.login(req.body.username, req.body.password);
        res.send({
            "data":
                admin
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