import Koa from 'koa';
import { ClassSubjectService } from './service';

export class ClassSubjectController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await ClassSubjectService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await ClassSubjectService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.subject);

        var result = await ClassSubjectService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.subject);
        var data = context.request.body;

        var result = await ClassSubjectService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.subject);

        var result = await ClassSubjectService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}