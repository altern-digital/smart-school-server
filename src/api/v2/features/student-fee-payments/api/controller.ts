import Koa from 'koa';
import { StudentFeePaymentService } from './service';

export class StudentFeePaymentController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await StudentFeePaymentService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await StudentFeePaymentService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.payment);

        var result = await StudentFeePaymentService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.payment);
        var data = context.request.body;

        var result = await StudentFeePaymentService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.payment);

        var result = await StudentFeePaymentService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}