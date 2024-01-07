import Koa from 'koa';
import { ClassService } from './service';

export class ClassController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await ClassService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await ClassService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.class);

        var result = await ClassService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.class);
        var data = context.request.body;

        var result = await ClassService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.class);

        var result = await ClassService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}