import Koa from 'koa';
import { UploadService } from './service';
import { log } from 'console';

export class UploadController {
    static async createOne(context: Koa.Context) {
        context.body = {
            data: context.file,
        };
    }
}