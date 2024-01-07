import Koa from 'koa';
import { ClassRoomService } from './service';

export class ClassRoomController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await ClassRoomService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await ClassRoomService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.room);

        var result = await ClassRoomService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.room);
        var data = context.request.body;

        var result = await ClassRoomService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.room);

        var result = await ClassRoomService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}