import Koa from 'koa';
import { StudentAttendanceRequestService } from './service';

export class StudentAttendanceRequestController {
    static async getMany(context: Koa.Context) {
        var query = context.querymap;

        var entries = await StudentAttendanceRequestService.getMany(query);

        context.body = {
            data: entries,
        };
    }

    static async createOne(context: Koa.Context) {
        var entry = context.request.body

        delete entry.id;

        var result = await StudentAttendanceRequestService.createOne(entry);

        context.body = {
            data: result,
        };
    }

    static async getOne(context: Koa.Context) {
        var query = context.querymap;

        var id = parseInt(context.params.attendance_request);

        var result = await StudentAttendanceRequestService.getOne(id, query);

        context.body = {
            data: result,
        };
    }

    static async updateOne(context: Koa.Context) {
        var id = parseInt(context.params.attendance_request);
        var data = context.request.body;

        var result = await StudentAttendanceRequestService.updateOne(id, data);

        context.body = {
            data: result,
        };
    }

    static async deleteOne(context: Koa.Context) {
        var id = parseInt(context.params.attendance_request);

        var result = await StudentAttendanceRequestService.deleteOne(id);

        context.body = {
            data: result,
        };
    }
}