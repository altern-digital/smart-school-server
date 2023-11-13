import { Request, Response } from "express";

import * as userService from "./user.service";

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await userService.getUsers();

        res.json(users);
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

export async function getUser(req: Request, res: Response) {
    const { userId } = req.params;

    const userIdInt = parseInt(userId);

    try {
        const user = await userService.getUser(userIdInt);

        res.json({
            "data": user,
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

export async function getProfile(req: Request, res: Response) {
    const { userId } = req.params;

    const userIdInt = parseInt(userId);

    try {
        const profile = await userService.getProfile(userIdInt);

        res.json(profile);
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