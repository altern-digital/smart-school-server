import Koa from "koa";

import * as service from "./service";

export async function getUsers(context: Koa.Context) {
    try {
        const users = await service.getUsers();

        context.body = {
            data: users,
        };
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e.message
            ]
        };
        return;
    }
}

export async function getUser(context: Koa.Context) {
    const { userId } = context.params.id;

    const userIdInt = parseInt(userId);

    try {
        const user = await service.getUser(userIdInt);

        context.body = {
            data: user,
        }
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e,
            ],
        };
        return;
    }
}