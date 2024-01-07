import Koa from 'koa';
import { StudentFeeService } from './service';

export class StudentFeeController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await StudentFeeService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await StudentFeeService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.fee);

        var result = await StudentFeeService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.fee);
        var data = context.request.body;

        var result = await StudentFeeService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.fee);

        var result = await StudentFeeService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}