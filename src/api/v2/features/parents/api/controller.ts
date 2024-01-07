import Koa from 'koa';
import { ParentService } from './service';

export class ParentController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await ParentService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await ParentService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.parent);

        var result = await ParentService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.parent);
        var data = context.request.body;

        var result = await ParentService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.parent);

        var result = await ParentService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}