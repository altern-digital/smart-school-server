import Koa from 'koa';
import { TeacherService } from './service';

export class TeacherController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await TeacherService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await TeacherService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.teacher);

        var result = await TeacherService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.teacher);
        var data = context.request.body;

        var result = await TeacherService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.teacher);

        var result = await TeacherService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}