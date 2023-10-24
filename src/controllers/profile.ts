import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import * as authService from "../services/auth";
import * as profileService from "../services/profile";
import * as userService from "../services/user";

async function getProfile(req: Request, res: Response) {
    const { userId } = req.params;

    const userIdInt = parseInt(userId);

    try {
        const user = await userService.getUser(userIdInt);

        if (!user) {
            return res.status(401).json({ message: 'Invalid userId' });
        }

        const profile = await profileService.getProfile(user.id, user.role);

        res.json({
            "user": {
                "id": user.id,
                "role": user.role
            },
            profile,
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

async function updateProfile(req: Request, res: Response) {
    const { userId } = req.params;
    const { data } = req.body;

    const userIdInt = parseInt(userId);

    try {
        const user = await userService.getUser(userIdInt);

        if (!user) {
            return res.status(401).json({ message: 'Invalid userId' });
        }

        const profile = await profileService.updateProfile(user.id, user.role, data);

        res.json({
            "user": {
                "id": user.id,
                "role": user.role
            },
            profile,
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

export { getProfile, updateProfile };