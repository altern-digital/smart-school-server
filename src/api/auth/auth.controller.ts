import { Request, Response } from "express";
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

import * as authService from "./auth.service";
import * as userService from "../users/user.service";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export async function loginUser(req: Request, res: Response) {
    const { identifier, password } = req.body;

    console.log(req.body);

    try {
        const user = await authService.loginUser(identifier, password);

        if (!user) {
            return res.status(401).json({ message: 'Invalid identifier or password' });
        }

        const jwt = jsonwebtoken.sign({ id: user.id }, JWT_SECRET);
        const profile = await userService.getProfile(user.id);

        res.json({
            jwt,
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

export async function userMe(req: Request, res: Response) {
    const { id } = req.body.user;

    try {
        const user = await authService.userMe(id);

        if (!user) {
            return res.status(401).json({ message: 'Invalid identifier or password' });
        }

        const jwt = jsonwebtoken.sign({ id: user.id }, JWT_SECRET);
        const profile = await userService.getProfile(user.id);
        res.json({
            jwt,
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

export async function registerUser(req: Request, res: Response) {
    var { identifier, password, role, data } = req.body;

    if (data == null) {
        data = {};
    }

    try {
        if (!identifier || !password || !role) {
            return res.status(401).json({ message: 'Invalid (identifier, password, accessCode)' });
        }

        const registerData = await authService.registerUser(identifier, password, role, data);
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

export function authenticate(req: Request, res: Response, next: any) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jsonwebtoken.verify(token, JWT_SECRET, (err: any, user: any) => {
            if (err) {
                console.log(err);

                return res.sendStatus(403);
            }

            req.body.user = user;
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
}