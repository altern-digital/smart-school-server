import Koa from 'koa';

import * as userService from "../services/user.service";

export async function getUsers(context : Koa.Context) {
    try {
        const users = await userService.getUsers();

        context.body = users;
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            error: {
                message: e.message
            }
        };
        return;
    }
}

export async function getUser(context : Koa.Context) {
    const { userId } = context.params.id;

    const userIdInt = parseInt(userId);

    try {
        const user = await userService.getUser(userIdInt);

        context.body = {
            "data": user,
        }
    }
    catch (e: any) {
        context.status = 401;
    context.body = {
      error: {
        message: e,
      },
    };
        return;
    }
}

export async function getProfile(context : Koa.Context) {
    const { userId } = context.params;

    const userIdInt = parseInt(userId);

    try {
        const profile = await userService.getProfile(userIdInt);

        context.body = profile;
    }
    catch (e: any) {
        context.status = 401;
    context.body = {
      error: {
        message: e,
      },
    };
        return;
    }
}