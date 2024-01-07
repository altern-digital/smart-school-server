import Koa from 'koa';
import { StudentPointService } from './service';

export class StudentPointController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await StudentPointService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await StudentPointService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.point);

        var result = await StudentPointService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.point);
        var data = context.request.body;

        var result = await StudentPointService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.point);

        var result = await StudentPointService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}