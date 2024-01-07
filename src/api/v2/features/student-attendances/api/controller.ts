import Koa from 'koa';
import { StudentAttendanceService } from './service';

export class StudentAttendanceController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await StudentAttendanceService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await StudentAttendanceService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.attendance);

        var result = await StudentAttendanceService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.attendance);
        var data = context.request.body;

        var result = await StudentAttendanceService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.attendance);

        var result = await StudentAttendanceService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}