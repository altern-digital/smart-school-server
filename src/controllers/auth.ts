import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import * as authService from "../services/auth";
import * as profileService from "../services/profile";
import { log } from "console";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

async function loginUser(req: Request, res: Response) {
    const { identifier, password } = req.body;

    console.log(req.body);

    try {
        const user = await authService.loginUser(identifier, password);

        if (!user) {
            return res.status(401).json({ message: 'Invalid identifier or password' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);

        const profile = await profileService.getProfile(user.id, user.role);

        res.json({
            token,
            user,
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

async function userMe(req: Request, res: Response) {
    const { userId } = req.body;

    try {
        const user = await authService.userMe(userId);

        res.json({
            user,
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

async function registerUser(req: Request, res: Response) {
    var { identifier, password, accessCode, data } = req.body;

    var role;

    if (data == null) {
        data = {};
    }

    switch (accessCode) {
        case 668290:
            role = 'STUDENT';
            break;
        case 706837:
            role = 'TEACHER'
    }

    try {
        if (!identifier || !password || !accessCode) {
            return res.status(401).json({ message: 'Invalid (identifier, password, accessCode)' });
        }

        const registerData = await authService.registerUser(identifier, password, role, data);

        const token = jwt.sign({ id: registerData.user.id, role: registerData.user.role }, JWT_SECRET);

        res.json({
            token,
            ...registerData,
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

function authenticate(req: Request, res: Response, next: any) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.body.userId = decoded.id;
        req.body.role = decoded.role;

        next();
    });
}

export { loginUser, userMe, registerUser, authenticate };