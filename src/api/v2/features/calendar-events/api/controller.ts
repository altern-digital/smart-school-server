import Koa from 'koa';
import { CalendarEventService } from './service';

export class CalendarEventController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await CalendarEventService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await CalendarEventService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.event);

        var result = await CalendarEventService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.event);
        var data = context.request.body;

        var result = await CalendarEventService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.event);

        var result = await CalendarEventService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}