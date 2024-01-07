import Koa from 'koa';
import { FaqService } from './service';
import { log } from 'console';

export class FaqController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await FaqService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await FaqService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.faq);

        var result = await FaqService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.faq);
        var data = context.request.body;

        var result = await FaqService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.faq);

        var result = await FaqService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}