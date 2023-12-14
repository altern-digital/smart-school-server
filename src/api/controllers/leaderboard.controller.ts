import Koa from 'koa';

import * as leaderboardService from "../services/leaderboard.service";

export async function getStudentLeaderboard(context : Koa.Context) {
    const classroomName = context.params.classroomName;
    const students = await leaderboardService.getStudentLeaderboard(classroomName);

    context.body = students
}