import Koa from "koa";

import * as service from "./service";

export async function getFees(context: Koa.Context) {
    try {
        const fees = await service.getFees();

        context.body = {
            data: fees,
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

export async function getFee(context: Koa.Context) {
    const { id } = context.params;

    const idInt = parseInt(id);

    try {
        const fee = await service.getFee(idInt);

        context.body = {
            data: fee,
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

export async function getFeePayments(context: Koa.Context) {
    const { id } = context.params;

    const idInt = parseInt(id);

    try {
        const payments = await service.getFeePayments(idInt);

        context.body = {
            data: payments,
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

export async function createFeePayment(context: Koa.Context) {
    const { id } = context.params;
    const { amount, description } = context.request.body;

    const idInt = parseInt(id);
    const amountInt = parseInt(amount);

    const fileLocation = context.file.location;

    try {
        const payment = await service.createFeePayment(idInt, amountInt, description, fileLocation);

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