import Koa from "koa";

import * as service from "./service";

export async function createFeedback(context: Koa.Context) {
    const { description } = context.request.body;

    const snapshotUrl = context.file.location;

    try {
        const payment = await service.createFeedback(description, snapshotUrl);

        context.body = {
            data: payment,
        };
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