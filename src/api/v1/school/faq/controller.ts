import Koa from "koa";

import * as service from "./service";

export async function getFaqs(context : Koa.Context) {
    try {
        const faqs = await service.getFaqs();

        context.body = {
            data: faqs,
        }
    }
    catch (e: any) {
        context.status = 401;
        context.body = {
            errors: [
                e,
            ]
        };
        return;
    }
}