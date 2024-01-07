import Koa from 'koa';
import { FeedbackService } from './service';

export class FeedbackController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await FeedbackService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await FeedbackService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.feedback);

        var result = await FeedbackService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.feedback);
        var data = context.request.body;

        var result = await FeedbackService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.feedback);

        var result = await FeedbackService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}