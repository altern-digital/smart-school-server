import Koa from 'koa';
import { ClassScheduleService } from './service';

export class ClassScheduleController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await ClassScheduleService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await ClassScheduleService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.schedule);

        var result = await ClassScheduleService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.schedule);
        var data = context.request.body;

        var result = await ClassScheduleService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.schedule);

        var result = await ClassScheduleService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}