import Koa from 'koa';
import { StudentService } from './service';

export class StudentController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await StudentService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await StudentService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.student);

        var result = await StudentService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.student);
        var data = context.request.body;

        var result = await StudentService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.student);

        var result = await StudentService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}