import Koa from 'koa';
import { StudentPointTypeService } from './service';

export class StudentPointTypeController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await StudentPointTypeService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await StudentPointTypeService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.point_type);

        var result = await StudentPointTypeService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.point_type);
        var data = context.request.body;

        var result = await StudentPointTypeService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.point_type);

        var result = await StudentPointTypeService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}